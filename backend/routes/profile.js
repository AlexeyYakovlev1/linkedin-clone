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
router.post('/add/post/:id', async(req, res) => {
    try {
        const {text, img} = await req.body;
        const user = await User.findById(req.params.id);

        await User.updateOne({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
            background: user.background,
            photo: user.photo,
            followers: user.followers
        },
        {$push: {posts: {$each: [{text, img}], $position: 0}}});

        res.redirect('/profile/'+user._id);
    } catch (e) {
        console.log('error ' + e);
    }
})

router.get('/api/posts', async(req, res) => {
    try {
        User.find((err, data) => {
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

module.exports = router;