function clean(obj) {
  if (!obj || typeof obj !== "object") return obj;

  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "string") {
      obj[key] = obj[key]
        .replace(/<script.*?>.*?<\/script>/gi, "")
        .replace(/\bon\w+\s*=/gi, "")
        .trim();
    } else if (typeof obj[key] === "object") {
      clean(obj[key]);
    }
  });
  return obj;
}

module.exports = (req, res, next) => {
  // We use the 'clean' function to modify the existing objects
  if (req.body) clean(req.body);
  if (req.params) clean(req.params);
  if (req.query) clean(req.query);
  next();
};