const { Router } = require("express");
const axios = require("axios");
const User = require("./models/User");

const routes = Router();

//Cadastrar novo usuário
routes.post("/users", async (req, res) => {
  try {
    const { github_user, skills } = req.body;

    const response = await axios.get(
      `https://api.github.com/users/${github_user}`
    );

    const { name = login, avatar_url, bio } = response.data;

    const skillsArray = skills.split(",").map(skill => skill.trim());

    const user = await User.create({
      github_user,
      name,
      avatar: avatar_url,
      bio,
      skills: skillsArray
    });

    return res.json(user);
  } catch (err) {
    console.log(err);
  }
});

module.exports = routes;
