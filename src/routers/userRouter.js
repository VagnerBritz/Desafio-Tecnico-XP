const { Router } = require('express');
const userControllers = require('../controllers/userController');
const authControllers = require('../controllers/authController');
const tokenService = require('../services/tokenService');

const router = Router();

router.post('/login', authControllers.login);
router.use(authControllers.validateToken);
router.get('/:id', userControllers.user);

module.exports = router;