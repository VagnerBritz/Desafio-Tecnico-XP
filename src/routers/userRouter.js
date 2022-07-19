const { Router } = require('express');
const userControllers = require('../controllers/userController');
const authControllers = require('../controllers/authController');
const tokenService = require('../services/tokenService');

const router = Router();

router.post('/login', authControllers.login);
router.post('/deposito', )
router.use(authControllers.validateToken);
router.get('/:id', userControllers.balance);

module.exports = router;