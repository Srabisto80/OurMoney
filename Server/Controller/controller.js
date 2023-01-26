const bcrypt = require("bcrypt");
const CreateUser = require("../Modal/Modal");

const User = CreateUser;

const registerNewUser = async (req, res) => {
  console.log("body", req.body);
  const { firstName, lastName, email, password, confirmPassword } = req.body;
  try {
    console.log("line 13");
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      // respond 400 if missing request body fields
      return res.status(400).json({ message: "Please fill all the fields" });
    } else if (password !== confirmPassword) {
      // respond 400 if passwords do not match
      return res.status(400).json({ message: "Passwords do not match" });
    } else {
      const doesExist = await User.findOne({
        email: req.body.email,
      });
      console.log("email", email);
      if (doesExist) {
        console.log("does exist", doesExist);
        // respond 400 if email already exists
        return res.status(400).json({ message: "Email is already registered" });
      } else {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const newUser = new User({
          firstName,
          lastName,
          email,
          password: hash,
        });
        console.log(newUser, "newUser");
        newUser.save();
        return res.status(201).json(newUser);
      }
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body, "The Body");
  try {
    if (!email || !password) {
      // respond 400 if missing request body fields
      return res.status(400).json({ message: "Please fill all the fields" });
    } else {
      const users = await User.find();
      console.log("pre-if", users);
      if (users) {
        console.log("users found", users);
      }
      const user = await User.findOne({ email });
      console.log("🚀 ~ file: user.controller.js:88 ~ loginUser: ~ user", user);
      if (!user) {
        // respond 404 if user does not exist
        return res.status(404).json({ message: "User does not exist" });
      } else {
        const validPassword = bcrypt.compareSync(password, user.password);
        console.log(
          "🚀 ~ file: user.controller.js:90 ~ loginUser: ~ validPassword",
          validPassword
        );
        if (!validPassword) {
          // respond 400 if password is incorrect
          return res.status(400).json({ message: "Incorrect password" });
        } else {
          return res.status(200).json(user.email);
        }
      }
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const forgotPass = async (req, res) => {
  const userEmail = req.body.email;
  console.log("forgot pass start", userEmail);
  try {
    console.log("line 96");
    const user = User.findOne({ email: userEmail });
    console.log(user);
    if (!user) {
      return res.status(404).json({ message: "Email not registered." });
    } else {
      // console.log(res.json(data))
      // return res.status(200).json(data)
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const addNewIncome = async (req, res) => {
  console.log(req.newPayor, req.newIncome);
};

const loadDash = async (req, res) => {
  console.log(req.url, req.method, req.body);
  const userEmail = req.body.userEmail;
  console.log(userEmail);
  const user = await User.findOne({email:userEmail});
  console.log(user)
  return res.status(200).json(user)
};

const addNewBill = async (req, res) => {
  
}

//   const getData = async (req,res) => {
//     console.log("getting data");
//     try {
//       const userEmail = req.params.email;
//       console.log(userEmail);

//     } catch (error) {
//       console.error(error);
//       throw error;
//     }
//   }
// // };
module.exports = {
  registerNewUser,
  loginUser,
  forgotPass,
  addNewIncome,
  loadDash,
  addNewBill,
};
