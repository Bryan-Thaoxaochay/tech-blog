const router = require('express').Router();
const { User } = require('../../models');

router.get('/login', async (req, res) => {
    try {
        res.render('login');
    }
    catch (err) {
        res.status(500).json(err);
    }
})

router.post('/login', async (req, res) => {
    try {
        const userData = await User.create(req.body)
        res.status(200).json(userData);
    }
    catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;