const axios = require("axios");
const User = require("../models/User");
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
  async index(req, res) {
    const { lat, long, skills } = req.query;

    const skillsArray = parseStringAsArray(skills);

    const users = await User.find({
      // Search users for skills
      skills: {
        $in: skillsArray
      },
      // Search for users within 10000KM
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [long, lat]
          },
          $maxDistance: 10000
        }
      }
    });

    return res.json({ users });
  }
};
