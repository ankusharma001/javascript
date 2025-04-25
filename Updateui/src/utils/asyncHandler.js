const asyncHandler = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next))
      .catch((err) => {
        console.error(err); // Log the error for debugging
        next(err); // Pass the error to the next middleware (error handling middleware)
      });
  };
};

export { asyncHandler };
