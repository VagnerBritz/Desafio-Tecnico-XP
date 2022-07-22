const { Router } = require('express');
const investmentsController = require('../controllers/investmentsController');
const authControllers = require('../controllers/authController');

const router = Router();

// Rotas públicas
router.get('/', investmentsController.getAll);
router.get('/search', investmentsController.getByName);
router.get('/cod/:id', investmentsController.getById);

// Rotas privadas
router.use(authControllers.validateToken);
router.get('/carteira', investmentsController.getWalllet);
router.post('/comprar', investmentsController.buyStoks);
router.post('/vender', investmentsController.sellStock);

module.exports = router;