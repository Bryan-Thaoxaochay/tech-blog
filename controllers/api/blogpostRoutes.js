const router = require('express').Router();
const { Blogposts, User } = require('../../models');
const withAuth = require('../../utils/auth');

module.exports = router;

router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const userPosts = await Blogposts.findAll({
            where: {
                user_id: req.session.user_id
            }
        });

        const blogposts = userPosts.map((blogpost) => blogpost.get({ plain: true }));

        res.render('dashboard', {
            blogposts,
            logged_in: req.session.logged_in
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
});

router.post('/dashboard', withAuth, async (req, res) => {
    try {
        const newPost = await Blogposts.create({
            ...req.body,
            user_id: req.session.user_id
        });
        res.status(200).json(newPost);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

router.get('/update-delete', withAuth, async (req, res) => {
    try {
        res.render('change', {
            logged_in: req.session.logged_in
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
});

router.put('/update-delete/:id', withAuth, async (req, res) => {
    try {
        const updatePost = await Blogposts.update(req.body, {
            where: {
                id: req.session.id
            }
        });
        res.status(200).json(updatePost);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

router.get('/edit/:id', withAuth, (req, res) => {
    Blogposts.findByPK(req.params.id)
    .then(dbPostData => {
        if (dbPostData) {
            const post = dbPostData.get({ plain: true});

            res.render("edit-post", {
                layout: "change",
                post
            });
        } else {
            res.status(404).end();
        } }
        ).catch(err => {
        res.status(500).json(err);
    }) 
})


router.delete('/update-delete', withAuth, async (req, res) => {
    try {
        const deletePost = await Blogposts.destroy({
            where: {
                id: req.session.id
            }
        })
    }
    catch (err) {
        res.status(500).json(err);
    }
});