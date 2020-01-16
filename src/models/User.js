const mongoose = require("mongoose");
const PointSchema = require("./utils/PointSchema");

const UserSchema = new mongoose.Schema({
  name: String,
  bio: String,
  github_user: String,
  avatar: String,
  skills: [String],
  location: {
    type: PointSchema,
    index: "2dsphere"
  }
});

module.exports = mongoose.model("User", UserSchema);
