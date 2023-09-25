// Tost Error.

export const ToastError = (error) => {
  if (error) {
    return error === "ERROR_MESSAGES"
      ? "Error messages"
      : error === "ERROR_REQ"
      ? "Bud request"
      : false;
  }
};
