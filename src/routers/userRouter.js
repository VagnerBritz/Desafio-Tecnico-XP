const { Router } = require('express');
const userControllers = require('../controllers/userController');
const authControllers = require('../controllers/authController');
const accountController = require('../controllers/accountController');

const router = Router();

// Rotas públicas
router.post('/login', authControllers.login);
router.post('/deposito', accountController.deposit);
router.post('/criar', userControllers.createAccount);

// Rotas privadas
router.use(authControllers.validateToken);
router.post('/saque', accountController.withdraw);
router.get('/:id', userControllers.balance);
router.delete('/encerrar/', userControllers.deleteAccount);

module.exports = router;