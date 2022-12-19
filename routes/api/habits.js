const express = require('express');
const router = express.Router();
const habitsCtrl = require('../../controllers/api/habits');

// GET /api/habits
router.get('/', habitsCtrl.index);
// Get /api/habits/:id
router.get('/:id', habitsCtrl.show);

module.exports = router;