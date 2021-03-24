const router = require('express').Router();
const { Blogposts, User } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/homepage', async (req, res) => {
    try { // Getting all blogposts in the database
        const blogpostData = await Blogposts.findAll()

        const blogposts = blogpostData.map((blogpost) => blogpost.get({ plain: true }));

        // Rendering onto the homepage
        res.render('homepage', {
            blogposts,
            logged_in: req.session.logged_in
        });
    } 
    catch (err) { // Catching any errors
        res.status(500).json(err);
    }
})

module.exports = router;