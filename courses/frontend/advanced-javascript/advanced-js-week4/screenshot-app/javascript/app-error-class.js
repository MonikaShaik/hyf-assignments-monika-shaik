class AppError extends Error {
  constructor(message) {
    super(message);
    this.name = "AppError";
  }
  toUserMessage() {
    return "Something went wrong. Please try again.";
  }
}

export default AppError;
