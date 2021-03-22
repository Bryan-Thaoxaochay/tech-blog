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