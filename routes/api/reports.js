const express = require('express');
const router = express.Router();
const reportsCtrl = require('../../controllers/api/reports');

// GET /api/reports/notReadyHabits
router.get('/notReadyHabits', reportsCtrl.notReadyHabits);
// POST /api/reports/notReadyHabits/habits/:id
router.post('/notReadyHabits/habits/:id', reportsCtrl.addToNotReadyHabits);
// POST api/reports/notReadyHabits/qty
router.put('/notReadyHabits/qty', reportsCtrl.setHabitQtyInNotReadyHabits);
// POST /api/reports/notReadyHabits/submitReport
router.post('/notReadyHabits/submitReport', reportsCtrl.submitReport);

module.exports = router;