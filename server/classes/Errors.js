import SafeError from "./SafeError";
import ErrorMessages from "./ErrorMessages";

/**
 * Create custom error dynamically base on ./ErrorMessages.js
 * EXAMPLE: throw new Errors.JWT_EXPIRED()
 */
const Errors = Object.entries(ErrorMessages).reduce((errors, [k, v]) => {
  const name = k;
  errors[k] = class k extends SafeError {
    constructor(message = v.message, status = v.status) {
      super({
        message: message,
        status: status,
        name: name
      });
    }
  };
  return errors;
}, {});

export default Errors;
