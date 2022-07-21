const { Router } = require('express');
const investmentsController = require('../controllers/investmentsController');

const router = Router();

router.get('/', investmentsController.getAll);
router.get('/search', investmentsController.getByName);
router.get('/:id', investmentsController.getById);
router.post('/comprar', investmentsController.buyStoks);
router.post('/vender');

module.exports = router;