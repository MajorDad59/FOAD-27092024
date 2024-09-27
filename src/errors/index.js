import { StatusCodes } from "http-status-codes";

class UnauthentificatedError extends Error {
  constructor(message) {
    super(message);
    this.name = "UnauthentificatedError";
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

export { UnauthentificatedError };
