const router = require('express').Router();
const { Blogposts, User } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try { // Getting all blogposts in the database
        const blogpostData = await Blogposts.findAll({
            include: [
                {
                    model: Blogposts, // Model
                    attributes: ['name', 'description', 'date_created'] // Info needed from model
                }
            ]
        })

        const blogposts = blogpostData.map((blogpost) => blogpost.get({ plain: true }));

        // Rendering onto the homepage
        res.render('homepage', {
            blogposts
        });
    } 
    catch (err) { // Catching any errors
        res.status(500).json(err);
    }
})

module.exports = router;