const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  bio: String,
  github_user: String,
  avatar: String,
  skills: [String]
});

module.exports = mongoose.model("User", UserSchema);
