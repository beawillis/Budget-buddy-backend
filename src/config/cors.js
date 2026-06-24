const cors = require("cors");

const corsOptions = {
  origin: "*",
  credentials: true,
};

module.exports = cors(corsOptions);