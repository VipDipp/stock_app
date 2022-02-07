const Router = require('express');
const router = new Router();
const balanceController = require('../controllers/balanceController');

router.post('/balance', balanceController.balance);

module.exports = router;