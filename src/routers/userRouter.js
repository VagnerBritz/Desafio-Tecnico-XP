const { Router } = require('express');
const userControllers = require('../controllers/userController');
const authControllers = require('../controllers/authController');
const tokenService = require('../services/tokenService');
const accountService = require('../controllers/accountController');
const accountController = require('../controllers/accountController');

const router = Router();

router.post('/login', authControllers.login);
router.post('/deposito', accountController.deposit);
router.use(authControllers.validateToken);
router.get('/:id', userControllers.balance);

module.exports = router;