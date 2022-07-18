const { Router } = require('express');
const userControllers = require('../controllers/userController');
const authControllers = require('../controllers/authController');


const router = Router();

router.get('/:id', userControllers.user);
router.post('/login', authControllers.login);

module.exports = router;