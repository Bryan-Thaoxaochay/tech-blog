const router = require('express').Router();
const { Blogposts } = require('../../models');
const withAuth = require('../../utils/auth');

module.exports = router;

router.get('/dashboard', async (req, res) => {
    try {
        res.render('dashboard', {
            logged_in: req.session.logged_in
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
})

