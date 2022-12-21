const Level = require('../../models/lvlofimp');

module.exports = {
    getAll,
};

async function getAll(req, res) {
    const levels = await Level.find({
        user: req.user._id
    });
    res.json(levels);
}