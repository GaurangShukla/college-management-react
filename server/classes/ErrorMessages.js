/**
 * Define cusom errors
 */
const ErrorMessages = Object.freeze({
  UNKNOWN: { status: 500, message: "Unknown server error" },
  UNKNOWN_DB: { status: 500, message: "Unknown DB error" },
  UNAUTHORIZED: { status: 401, message: "Unauthorized" },
  JWT_INVALID: { status: 401, message: "JWT is invalid" },
  JWT_EXPIRED: { status: 401, message: "JWT is expired" },
  NO_TOKEN: { status: 403, message: "No token provided" },
  INVALID_AUTH_HEADER: {
    status: 401,
    message: "Missing `authorization` header"
  },
  OLD_PWD_NOT_VALID: { status: 500, message: "Old password not valid" },
  PWD_ADMIN_NOT_VALID: { status: 500, message: "Password admin not valid" },
  INVALID_LOGIN: { status: 401, message: "Not Authorized" },
  INVALID_BODY: { status: 400, message: "Invalid JSON body" },
  INVALID_QUERY: { status: 400, message: "Invalid query string" }
});

export default ErrorMessages;
