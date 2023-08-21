const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

const validateOrganRegisterInput = require("../../validation/organRegister");
const validateLoginInput = require("../../validation/login");

const Organ = require("../../models/Organization");

router.get("/test", (req, res) => res.json({ msg: "Organization works!" }));

router.post("/register", (req, res) => {
  const { errors, isValid } = validateOrganRegisterInput(req.body);

  if (!isValid) {
    return res.status(404).json(errors);
  }

  Organ.findOne({ email: req.body.email }).then((organ) => {
    if (organ) {
      errors.email = "Email already exists";
      return res.status(404).json(errors);
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200",
        r: "pg",
        d: "mm",
      });

      const newOrgan = new Organ({
        organId: req.body.organId,
        organName: req.body.organName,
        personalName: req.body.personalName,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newOrgan.password, salt, (err, hash) => {
          if (err) throw err;
          newOrgan.password = hash;

          newOrgan
            .save()
            .then((organ) => res.json(organ))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});


router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    if (!user) {
      errors.email = "User email not found";
      return res.status(404).json(errors);
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = { id: user.id, name: user.name, avatar: user.avatar };

        jwt.sign(
          payload,
          keys.secretOrKey, { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        errors.password = "Password incorrect";
        return res.json(errors);
      }
    });
  });
});

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

module.exports = router;