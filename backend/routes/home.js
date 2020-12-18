const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('user', {
        title: 'Linkedin login'
    });
});

module.exports = router;