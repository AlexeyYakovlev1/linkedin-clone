// variables
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongodb-session')(session);
const varMiddleware = require('./middleware/variables');
const userMiddleware = require('./middleware/user');
const homeRoute = require('./routes/home.js');

// app config
const app = express();
const PORT = process.env.PORT || 5000;
const URL = 'mongodb+srv://alex:PQBH5UBQnZvANibR@cluster0.mlodm.mongodb.net/linkedin?retryWrites=true&w=majority';

const store = new MongoStore({
    collection: 'sessions',
    uri: URL
});

// middlewares
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../client/views'));

app.use(express.static(path.join(__dirname, '../client/views')));
app.use(express.static(path.join(__dirname, '../client/public/')));
app.use(express.static(path.join(__dirname, '../client/assets/')));
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'secret value',
    resave: false,
    saveUninitialized: false,
    store
}));

app.use(varMiddleware);
app.use(userMiddleware);

app.use('/', homeRoute);

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