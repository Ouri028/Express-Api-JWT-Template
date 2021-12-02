const { Router } = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const TOKEN = Router();


TOKEN.post("/token", async (req, res) => {

    // Our register logic starts here
    try {
      // Get user input
      const { user, password } = req.body;
      // Validate user input
      if (!(user && password)) {
        return res.status(400).send({
            error: "AUTH_FAILED",
            message: "Required parameters { user: <String>, password: <String> }"
        });
      }

      const token_user = process.env.TOKEN_USER;
  
      //Encrypt user password
      const encryptedPassword = await bcrypt.hash(password, 10);
  
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
    } catch (err) {
      return res.send({
          error: err.message,
      }).status(400);
    }
    // Our register logic ends here
  });

module.exports = {
    TOKEN
}