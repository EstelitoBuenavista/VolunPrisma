//NOTE: POSSIBLY USELESS, ALSO POSSIBLY JUST FINDALL OR FINDBYID

const db = require("../prisma/database");
const bcrypt = require('bcrypt')
const Admin = db.admins;
const User = db.users;
const saltRounds = 8;

exports.create = async (req, res) => {
  try {
    const data = req.body;

    // Hash the password
    const hashedPass = await bcrypt.hash(data.password, saltRounds);

    // Check if the email exists
    const userExists = await User.findUnique({
      where: {
        email: data.email,
      },
    });

    if (userExists) {
      return res.status(400).send({ message: 'Email Already in Use' });
    }

    // Create the user
    const createdUser = await User.create({
      data: {
        email: data.email,
        password: hashedPass,
        first_name: data.first_name,
        last_name: data.last_name,
        role: 'admin',
      },
    });

    // Assuming Admin is a separate model/entity, create Admin or Student accordingly
    const createdAdmin = await Admin.create({
      data: {
        user_id: createdUser.user_id, // Adjust the field name according to your schema
      },
    });

    res.status(201).send({ createdUser, createdAdmin });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};