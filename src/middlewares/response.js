module.exports = (req, res, next) => {
  const originalJson = res.json.bind(res);

  res.json = (body) => {
    const statusCode = res.statusCode || 200;
    const isSuccess = statusCode >= 200 && statusCode < 300;

    let payload = body;

    if (body === undefined) {
      payload = null;
    }

    if (
      payload &&
      typeof payload === "object" &&
      ("success" in payload || "data" in payload || "error" in payload)
    ) {
      return originalJson(payload);
    }

    if (isSuccess) {
      payload = {
        success: true,
        data: payload,
        message: payload && typeof payload === "object" && payload.message ? payload.message : "Success"
      };
    } else {
      payload = {
        success: false,
        data: null,
        message:
          payload && typeof payload === "object" && payload.message
            ? payload.message
            : typeof payload === "string"
              ? payload
              : "Request failed",
        error:
          payload && typeof payload === "object" && payload.error
            ? payload.error
            : payload && typeof payload === "object" && payload.message
              ? payload.message
              : typeof payload === "string"
                ? payload
                : "Request failed"
      };
    }

    return originalJson(payload);
  };

  next();
};
