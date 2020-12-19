const {Router} = require('express');
const router = Router();
const User = require('../models/user.js');

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
})

module.exports = router;