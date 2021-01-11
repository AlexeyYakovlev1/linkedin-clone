const {Router} = require('express');
const router = Router();
const User = require('../models/user.js');

// change background for user page
router.post('/change/bg/:id', async(req, res) => {
    const {backgroundUrl} = await req.body;
    const user = await User.findById(req.params.id);

    await User.updateOne({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        background: user.background,
        followers: user.followers
    },
    {$set: {background: backgroundUrl}});

    res.redirect(`/profile/${user._id}`);
});

// change photo (avatar) for user page
router.post('/change/picture/:id', async(req, res) => {
    const {pictureUrl} = await req.body;
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
    {$set: {photo: pictureUrl}});

    res.redirect(`/profile/${user._id}`);
});

// change description for user page
router.post('/change/info/:id', async(req, res) => {
    const {firstName, lastName, industry, city} = await req.body;
    const user = await User.findById(req.params.id);

    await User.updateOne({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        company: user.company,
        city: user.city
    },
    {$set: {
        firstName: firstName || user.firstName,
        lastName: lastName || user.lastName,
        company: industry || user.company,
        city: city || user.city
    }});

    res.redirect('/profile/'+user._id);
});

module.exports = router;