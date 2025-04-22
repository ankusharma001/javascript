class ApiError extends Error {
  constructor(message= "something went wrong", statusCode , error = [], stack = "") {
    super(message);
    this.statusCode = statusCode;
    this.data= null;
    this.error = error;   
    this.success = false;
    if (stack) {
      this.stack = stack;
    }
    Error.captureStackTrace(this, this.constructor);
  }
}

export default ApiError;