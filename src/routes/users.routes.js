const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.controller');
const authController = require('../controllers/auth.controller');

router.get('/', authController.verifyToken, userController.getAllUsers);
router.get('/:id', authController.verifyToken, userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', authController.verifyToken, userController.updateUser);
router.delete('/:id', authController.verifyToken, userController.deleteUser);

module.exports = router;
