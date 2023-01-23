
const bcrypt = require('bcrypt');
const CreateUser = require('../models/user.model');

const User = CreateUser;

module.exports = {
  registerNewUser: async (req, res, next) => {
    try {
      const { firstName, lastName, email, password, confirmPassword } =
        req.body;
      if (!firstName || !lastName || !email || !password || !confirmPassword) {
        // respond 400 if missing request body fields
        res.status(400).json({ message: 'Please fill all the fields' });
        next();
      } else if (password !== confirmPassword) {
        // respond 400 if passwords do not match
        res.status(400).json({ message: 'Passwords do not match' });
        next();
      } else {
        const doesExist = await User.findOne({
          email: request.body.email,
        });
        if (doesExist) {
          // respond 400 if email already exists
          response.status(400).json({ message: 'Email is already registered' });
          next();
        } else {
          const salt = await bcrypt.genSalt(10);
          const hash = await bcrypt.hash(password, salt);
          const newUser = await User.create({
            firstName,
            lastName,
            email,
            password: hash,
          });
          res.status(201).json(newUser);
          next();
        }
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  loginUser: async (req, res, next) => {
    const { email, password } = req.body;
    try {
      if (!email || !password) {
        // respond 400 if missing request body fields
        res.status(400).json({ message: 'Please fill all the fields' });
        next();
      } else {
        const user = await User.findOne({ email });
        console.log(
          '🚀 ~ file: user.controller.js:88 ~ loginUser: ~ user',
          user
        );
        if (!user) {
          // respond 404 if user does not exist
          res.status(404).json({ message: 'User does not exist' });
          next();
        } else {
          const validPassword = bcrypt.compareSync(password, user.password);
          console.log(
            '🚀 ~ file: user.controller.js:90 ~ loginUser: ~ validPassword',
            validPassword
          );
          if (!validPassword) {
            // respond 400 if password is incorrect
            res.status(400).json({ message: 'Incorrect password' });
            next();
          } else {
            res.status(200).json(user);
            next();
          }
        }
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};
// };
module.exports = { registerNewUser, loginUser };