const express = require('express');
const router = express.Router();
const habitsCtrl = require('../../controllers/api/habits');

// GET /api/habits
router.get('/', habitsCtrl.index);
// GET /api/habits/:id
router.get('/:id', habitsCtrl.show);
// POST /api/habits
router.post('/', habitsCtrl.create);
// PUT /api/habits/:id
router.put('/:id', habitsCtrl.updateHabit);
// DELETE /api/habits/:id
router.delete('/:id', habitsCtrl.deleteHabit);

module.exports = router;