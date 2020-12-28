const {Router} = require('express');
const router = Router();
const User = require('../models/user.js');
const Post = require('../models/post.js');

router.get('/:id', async(req, res) => {
    try {
        if (req.user) {
            const user = await User.findById(req.params.id);
            const user_posts = user.posts;
            const posts = await Post.find();

            res.render('user', {
                title: `Linkedin ${user.firstName} ${user.lastName}`,
                user,
                user_posts,
                posts
            })
        } else {
            res.redirect('/');
        }
    } catch (e) {
        console.log(`Ошибка сервера: ${e.message}`);
    }
});

router.get('/some/:id', async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const user_posts = user.posts;
        const posts = await Post.find();

        res.render('user', {
            title: `Linkedin ${user.firstName} ${user.lastName}`,
            user,
            user_posts,
            posts,
            notUser: true
        })
    } catch (e) {
        console.log('error: ' + e.message);
    }
})

// render posts
router.post('/add/post/:id', async(req, res) => {
    try {
        const {text, link, img} = await req.body;
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
        {$push: {posts: {$each: [{text, link, img, time: new Date()}], $position: 0}}});

        const newPost = await new Post({
            time: new Date(),
            text: text,
            link: link,
            img: img,
            likes: 0,
            comments: 0,
            share: 0
        });

        await newPost.save();
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

// delete user post
router.post('/:id_user/remove-post/:id_post', async(req, res) => {
    try {
        const userId = req.params.id_user;
        const postId = req.params.id_post;

        await User.updateOne({}, {$pull: {posts: {_id: postId}}});
        
        res.redirect('/profile/'+userId);
    } catch (e) {
        console.log('error: ' + e.message);
    }
});

// render profiles
router.get('/api/profiles', (req, res) => {
    try {
        User.find(async(err, data) => {
            if (err) {
                res.status(400).send(err);
            } else {
                const users = await data.filter(item => {
                    return item._id.toString() !== req.user._id.toString();
                });

                res.status(200).send(users);
            }
        })
    } catch (e) {
        console.log('error: ' + e.message)
    }
})

module.exports = router;