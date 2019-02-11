/**
 * @author lei wen peng
 * @description User schema
 */
const { Schema } = require("mongoose");
const COLLECTION = "User";

module.exports = Schema(
  {
    username: String,
    password: String
  },
  { collection: COLLECTION }
);
