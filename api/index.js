const serverless = require("serverless-http");
const app = require("../app"); // Make sure this is the Express app

module.exports.handler = serverless(app, {
  framework: "express", // 👈 this forces express framework
});
