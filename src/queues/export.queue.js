const { Queue } = require('bullmq');
const redis = require('../config/redis');

module.exports = new Queue("exports", {
  connection: redis
});