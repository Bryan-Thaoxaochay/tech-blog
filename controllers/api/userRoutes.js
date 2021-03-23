const router = require('express').Router();
const { User } = require('../../models');

router.get('/signin', async (req, res) => {
    try {
        res.render('signin');
    }
    catch (err) {
        res.status(500).json(err);
    }
})

router.get('/signup', async (req, res) => {
    try {
        res.render('signup');
    }
    catch (err) {
        res.status(500).json(err);
    }
})

router.post('/signin', async (req, res) => {
    try {
        res.render('signin')
        // const userData = await User.create(req.body)
        // res.status(200).json(userData);
    }
    catch (err) {
        res.status(500).json(err);
    }
})

router.post('/signup', async (req, res) => {
    try {
        const userData = await User.create(req.body);
        res.status(200).json(userData);
    }
    catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;