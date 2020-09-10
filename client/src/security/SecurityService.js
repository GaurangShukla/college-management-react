import axios from "axios";
import UserApi from "../api/UserApi";

export default class SecurityService {
  /**
   * Set Authorization header
   */
  static setAuthorization() {
    try {
      const user = JSON.parse(
        localStorage.getItem("user") || sessionStorage.getItem("user")
      );

      if (user && user.token) {
        axios.defaults.headers.common["authorization"] = `Bearer ${user.token}`;
      } else {
        delete axios.defaults.headers.common["authorization"];
      }
    } catch (e) {
      console.error("User not valid");
      console.error(e);
    }
  }

  /**
   * Logout
   */
  static logout() {
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");

    // Set header
    SecurityService.setAuthorization();
  }

  /**
   * Get logged user
   */
  static getUser() {
    try {
      const user = JSON.parse(
        localStorage.getItem("user") || sessionStorage.getItem("user")
      );
      return user;
    } catch (e) {
      console.error("User not valid");
      console.error(e);
    }
  }

  /**
   * Check role user
   */
  static hasRole(role) {
    const user = SecurityService.getUser();
    return user && user.roles && user.roles.indexOf(role) !== -1;
  }

  /**
   * Check if role array is auth
   */
  static isAuth(roles) {
    const user = SecurityService.getUser();
    if (!user) return false;

    if (!roles || roles.length === 0) return true;
    if (SecurityService.hasRole("ADMIN")) return true;

    for (let i in roles) {
      if (SecurityService.hasRole(roles[i])) return true;
    }
    return false;
  }

  /**
   * Verify JWT Token
   */
  static async verifyToken(roles) {
    let user = SecurityService.getUser();

    if (user) {
      SecurityService.setAuthorization();
      try {
        let res = await UserApi.verifyToken(user.token);
        if (res.username) {
          return true;
        } else {
          SecurityService.logout();
          return false;
        }
      } catch (err) {
        SecurityService.logout();
        return false;
      }
    } else return false;
  }

  /**
   * Get update user
   */
  static updateUser(user) {
    let userLocal = JSON.parse(localStorage.getItem("user"));

    if (userLocal) {
      userLocal.name = user.name;
      userLocal.surname = user.surname;
      userLocal.mail = user.mail;
      localStorage.setItem("user", JSON.stringify(userLocal));
    }

    let userSession = JSON.parse(sessionStorage.getItem("user"));
    if (userSession) {
      userSession.name = user.name;
      userSession.surname = user.surname;
      userSession.mail = user.mail;
      sessionStorage.setItem("user", JSON.stringify(userSession));
    }

    return user;
  }
}
