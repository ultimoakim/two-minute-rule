const express = require('express');
const router = express.Router();
const reportsCtrl = require('../../controllers/api/reports');

// GET /api/reports/notReadyHabits
router.get('/notReadyHabits', reportsCtrl.notReadyHabits);

module.exports = router;