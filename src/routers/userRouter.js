const { Router } = require('express');
const userControllers = require('../controllers/userController');
const authControllers = require('../controllers/authController');
const accountController = require('../controllers/accountController');

const router = Router();

router.post('/login', authControllers.login);
router.post('/deposito', accountController.deposit);
router.post('/criar', userControllers.createAccount);
router.use(authControllers.validateToken);
router.post('/saque', accountController.withdraw);
router.get('/:id', userControllers.balance);
router.delete('/', userControllers.deleteAccount);

module.exports = router;