const {Router} = require('express');
const router = Router();
const User = require('../models/user.js');

router.get('/:id', async(req, res) => {
    try {
        const userId = req.query.id;
        const user = User.findById(userId);

        res.render('user', {
            title: `Linkedin ${user.firstName} ${user.lastName}`,
            user
        })
    } catch (e) {
        console.log(`Ошибка сервера: ${e.message}`);
    }
})

module.exports = router;