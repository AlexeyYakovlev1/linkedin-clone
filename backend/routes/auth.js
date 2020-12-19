const {Router} = require('express');
const router = Router();
const bcrypt = require('bcryptjs');
const User = require('../models/user.js');

router.get('/signup', (req, res) => {
    res.render('signup', {
        title: 'Linkedin signup'
    });
});

// register
router.post('/auth/register', async(req, res) => {
    try {
        const {firstName, lastName, email, password} = req.body;
        const userFind = await User.findOne({email});

        if (userFind) {
            console.log('Такой пользователь уже существует');
        } else {
            const hashPassword = await bcrypt.hash(password, 8);

            const newUser = new User({
                firstName,
                lastName,
                email,
                password: hashPassword
            });

            await newUser.save();

            console.log('Пользователь успешно создан');
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
            console.log('Такого пользователя не существует');
        } else {
            const comparePassword = await bcrypt.compare(password, userFind.password);

            if (!comparePassword) {
                console.log('Данные не верны!');
            } else {
                req.session.user = userFind;
                req.session.auth = true;
                await req.session.save(err => {
                    if (err) {
                        throw err;
                    }

                    res.redirect(`/profile/${userFind._id}`);
                });

                console.log(`Добро пожаловать, ${userFind.firstName}!`);
            }
        }
    
    } catch (e) {
        console.log(`Ошибка сервера: ${e.message}`);
    }
})

module.exports = router;