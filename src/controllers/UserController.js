const axios = require("axios");
const User = require("../models/User");

module.exports = {
  async index(req, res) {
    const users = await User.find();

    return res.json(users);
  },

  async store(req, res) {
    try {
      const { github_user, skills, lat, long } = req.body;

      let user = User.findOne({ github_user });

      if (!user) {
        const response = await axios.get(
          `https://api.github.com/users/${github_user}`
        );

        const { name = login, avatar_url, bio } = response.data;

        const skillsArray = skills.split(",").map(skill => skill.trim());

        const location = {
          type: "Point",
          coordinates: [long, lat]
        };

        user = await User.create({
          github_user,
          name,
          avatar: avatar_url,
          bio,
          skills: skillsArray,
          location
        });
      }

      return res.json(user);
    } catch (err) {
      console.log(err);
    }
  }
};
