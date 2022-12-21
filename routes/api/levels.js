const express = require('express');
const router = express.Router();
const levelsCtrl = require('../../controllers/api/levels');

// GET /api/levels
router.get('/', levelsCtrl.getAll);



module.exports = router;

