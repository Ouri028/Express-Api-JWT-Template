const { Router } = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const TOKEN = Router();
const config = process.env;


TOKEN.post("/token", async (req, res) => {
    // Get user input
    const { user, password } = req.body;
    // Validate user input
    if (user && password) {
      if (user == config.TOKEN_USER && password == config.TOKEN_SECRET) {
        const token_user = process.env.TOKEN_USER;

        //Encrypt user password
        const encryptedPassword = await bcrypt.hash(password, 10).catch(err => console.error(err));

        // Create token
        const token = jwt.sign(
          { user: user._id },
          process.env.TOKEN_SECRET,
          {
            expiresIn: "2h",
          }
        );

        let tokenized = {
          user: user,
          token: token
        }
        // return new user
        return res.send(tokenized).status(200);
      } else {
        return res.status(400).send({
          error: "AUTH_FAILED",
          message: "Required parameters { user: <String>, password: <String> }"
        });
      }
    }  else {
      return res.status(400).send({
        error: "AUTH_FAILED",
        message: "Required parameters { user: <String>, password: <String> }"
      });
    }
});

module.exports = {
  TOKEN
}
