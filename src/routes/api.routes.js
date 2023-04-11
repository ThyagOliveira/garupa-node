const express = require('express');
const authRoutes = require('./auth.routes');
const userRoutes = require('./users.routes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);

module.exports = router;
