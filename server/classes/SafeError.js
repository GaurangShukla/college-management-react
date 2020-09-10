import ErrorMessages from "./ErrorMessages";

/**
 * This class rappresent a managed error
 */
class SafeError extends Error {
  /**
   * Construct parent class
   *
   * @param {string} message - Message string to display to user
   * @param {string} name - Error name
   * @param {number} status - HTTP Error code
   */
  constructor({
    message = ErrorMessages.UNKNOWN.message,
    status = ErrorMessages.UNKNOWN.status,
    name = "UNKNOWN"
  }) {
    // Calling parent constructor of base Error class.
    super();

    // Saving class name in the property of our custom error as a shortcut.
    this.name = name;

    // Capturing stack trace, excluding constructor call from it.
    Error.captureStackTrace(this, this.constructor);

    // You can use any additional properties you want.
    // I'm going to use preferred HTTP status for this error types.
    // `500` is the default value if not specified.
    this.status = status;
    this.message = message;
  }
}
export default SafeError;
