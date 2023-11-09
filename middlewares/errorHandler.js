const errorHandler = (error, req, res, next) => {
  res
    .status(error.statusCode || 500)
    .json({ Message: error.message || "Server Problem" });
};
module.exports = errorHandler;
