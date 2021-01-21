const {Router} = require('express');
const router = Router();
const bcrypt = require('bcryptjs');
const User = require('../models/user.js');

// page
router.get('/signup', (req, res) => {
    res.render('signup', {
        title: 'Linkedin signup',
        loginError: req.flash('loginError'),
        registerError: req.flash('registerError')
    });
});

// logout
router.get('/auth/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
});

// register
router.post('/auth/register', async(req, res) => {
    try {
        const {firstName, lastName, email, password} = req.body;
        const userFind = await User.findOne({email});

        if (userFind) {
            req.flash('registerError', 'Такой пользователь уже существует.')
            res.redirect('/signup');
        } else {
            const hashPassword = await bcrypt.hash(password, 8);

            const newUser = new User({
                firstName,
                lastName,
                email,
                password: hashPassword
            });

            await newUser.save();

            res.redirect('/');
        }

    } catch (e) {
        console.log(`Ошибка сервера: ${e.message}`);
    }
})

// login
router.post('/auth/login', async(req, res) => {
    try {
        const {email, password} = req.body;
        const userFind = await User.findOne({email});

        if (!userFind) {
            req.flash('loginError', 'Такого пользователя не существует.')
            res.redirect('/');
        } else {
            const comparePassword = await bcrypt.compare(password, userFind.password);

            if (!comparePassword) {
                req.flash('loginError', 'Данные неверны.')
                res.redirect('/');
            } else {
                req.session.user = userFind;
                req.session.auth = true;
                await req.session.save(async(err) => {
                    if (err) {
                        throw err;
                    }

                    res.redirect(`/profile/${userFind._id}`);
                });
            }
        }
    
    } catch (e) {
        console.log(`Ошибка сервера: ${e.message}`);
    }
})

module.exports = router;