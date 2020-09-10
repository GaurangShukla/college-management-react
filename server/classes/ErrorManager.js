import SafeError from "./SafeError";
import Logger from "./Logger";

export class ErrorManager {
  constructor() {}

  getSafeError(err) {
    Logger.error(err.stack);
    if (err instanceof SafeError) {
      return err;
    }

    // create a safe, generic error message to always return
    return new SafeError({});
  }
}

export default new ErrorManager();
