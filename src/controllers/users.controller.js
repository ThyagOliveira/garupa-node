const model = require('../models/users.model');
const userController = {};

userController.verifyUser = async (whereCondition) => {
  const user = await model.findOne({ where: whereCondition });
  return user;
};

userController.getAllUsers = async (req, res) => {
  try {
    const users = await model.findAll({ order: ['id'] });
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};

userController.getUserById = async (req, res) => {
  try {
    const user = await userController.verifyUser({ id: req.params.id });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

userController.createUser = async (req, res) => {
  try {
    const userExists = await userController.verifyUser({
      email: req.body.email,
    });

    if (userExists) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const user = await model.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

userController.updateUser = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await userController.verifyUser({ id: req.params.id });
    const emailExists = await userController.verifyUser({
      email: email || null,
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (emailExists) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const updatedUser = await user.update(req.body);

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

userController.deleteUser = async (req, res) => {
  try {
    const user = await userController.verifyUser({ id: req.params.id });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await user.destroy();
    res.status(204).json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = userController;
