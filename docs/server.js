// variables
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongodb-session')(session);
const varMiddleware = require('./middleware/variables');
const userMiddleware = require('./middleware/user');
const homeRoute = require('./routes/home.js');
const signupRoute = require('./routes/auth.js');
const profileRoute = require('./routes/profile.js');
const changeRoute = require('./routes/change.js');
const flash = require('connect-flash');

// app config
const app = express();
const PORT = process.env.PORT || 3000;
const URL = 'mongodb+srv://alex:PQBH5UBQnZvANibR@cluster0.mlodm.mongodb.net/linkedin?retryWrites=true&w=majority';

const store = new MongoStore({
    collection: 'sessions',
    uri: URL
});

// middlewares
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, './views')));
app.use(express.static(path.join(__dirname, './public')));
app.use(express.static(path.join(__dirname, './assets')));
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'secret value',
    resave: false,
    saveUninitialized: false,
    store
}));

app.use(Cors());
app.use(flash());
app.use(varMiddleware);
app.use(userMiddleware);

app.use('/', homeRoute);
app.use('/', signupRoute);
app.use('/profile', profileRoute);
app.use('/', changeRoute);

// connect to mongodb and listenr
async function start() {
    try {
        await mongoose.connect(URL, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        app.listen(PORT, () => console.log('server has been started'));
    } catch (e) {
        process.exit(1);
    }
}

start();