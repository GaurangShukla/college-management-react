// Dependencies
import jsonwebtoken from "jsonwebtoken";
import cors from "cors";
import helmet from "helmet";
// Properties
import properties from "../properties";
// Errors
import ErrorManager from "../classes/ErrorManager";
import Errors from "../classes/Errors";
import UserModel from "../models/Test_db/UserModel";

/**
 * Middleware JWT
 * @param {string, array} roles Authorized role, null for all
 */
export const authorize = (roles = []) => {
  // Roles param can be a single role string (e.g. Role.User or 'User')
  // or an array of roles (e.g. [Role.Admin, Role.User] or ['Admin', 'User'])
  if (typeof roles === "string") {
    roles = [roles];
  }

  return [
    // Authenticate JWT token and attach user to request object (req.user)
    async (req, res, next) => {
      let token =
        req.headers.authorization &&
        req.headers.authorization.replace("Bearer ", "");

      if (!token) {
        const safeErr = ErrorManager.getSafeError(
          new Errors.INVALID_AUTH_HEADER()
        );
        res.status(safeErr.status).json(safeErr);
      } else {
        let decodedUser = null;
        try {
          decodedUser = jsonwebtoken.verify(token, properties.tokenSecret);
        } catch (err) {
          // Token not valid
          const safeErr = ErrorManager.getSafeError(new Errors.JWT_INVALID());
          return res.status(safeErr.status).json(safeErr);
        }

        if (decodedUser && hasRole(roles, decodedUser)) {
          req.user = decodedUser;
          next();
        } else {
          const safeErr = ErrorManager.getSafeError(new Errors.UNAUTHORIZED());
          res.status(safeErr.status).json(safeErr);
        }
      }
    }
  ];
};

export const initSecurity = app => {
  app.use(helmet());
  app.use(cors());
};

// ---------------- UTILS FUNCTIONS ---------------- //

/**
 * Check if user has role
 * @param {*} roles String or array of roles to check
 * @param {*} user Current logged user
 */
var hasRole = function(roles, user) {
  return (
    roles == undefined ||
    (user != undefined && roles.length == 0) ||
    (user != undefined && roles.indexOf("PUBLIC") != -1) ||
    (user != undefined && user.roles.indexOf("ADMIN") != -1) ||
    (user != undefined && findOne(roles, user.roles))
  );
};

/**
 * Find value in array
 * @param {*} array1
 * @param {*} array2
 */
var findOne = function(array1, array2) {
  for (var i in array1) {
    for (var j in array2) {
      if (array1[i] == array2[j]) return true;
    }
  }

  return false;
};
