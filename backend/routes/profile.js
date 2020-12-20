const {Router} = require('express');
const router = Router();
const User = require('../models/user.js');
const Post = require('../models/post.js');

router.get('/:id', async(req, res) => {
    try {
        const user = await User.findById(req.params.id);

        res.render('user', {
            title: `Linkedin ${user.firstName} ${user.lastName}`,
            user
        })
    } catch (e) {
        console.log(`Ошибка сервера: ${e.message}`);
    }
});

// render posts
router.get('/api/posts', async(req, res) => {
    try {
        Post.find((err, data) => {
            if (err) {
                res.status(400).send(err);
            } else {
                res.status(200).send(data);
            }
        })
    } catch (e) {
        console.log('error: ' + e.message);
    }
});

router.post('/api/posts', async(req, res) => {
    const posts = req.body;

    Post.create(posts, (err, data) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(201).send(data);
        }
    })
});

router.post('/add/post/:id', async(req, res) => {
    try {
        const {text, img} = await req.body;
        const user = User.findById(req.params.id);

        const newPost = await new Post({ text, img });

        await newPost.save();
        res.redirect('/profile/'+user._id);

    } catch (e) {
        console.log('error ' + e);
    }
})

module.exports = router;