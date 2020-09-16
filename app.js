require('dotenv').config()
const db = require('./Service/db.config')
const express = require('express')
const bodyParser = require('body-parser')
const Passport = require('./Middleware/passport')
const session = require('express-session')
const flash = require("connect-flash");
const app = express();

const PORT = 3000 || process.env.PORT

app.use(express.static('Public'))
// View engine
app.set('view engine', 'ejs');
app.set('views', './Views')
// Body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// Session
app.use(
    session({
        secret: "secured_key",
        cookie: {
            name: "session",
            keys: ["123"],
            maxAge: 24 * 60 * 60 * 1000
        },
        resave: false,
        saveUninitialized: false
    })
);

app.use(flash());
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    res.locals.error = req.flash('error')
    next()
});


// Middleware
app.use(Passport.initialize())
app.use(Passport.session())
//app.use(require("./middleware/auth"));




// Router
app.use('/', require('./Routes/index.router'))


//Page 404
app.use((req, res) => {
    res.status(404).render('404', { title: 'Page Not Found' });
})
//Page 500
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).render('500', { title: 'Page 500' })
})

db.sync()
    .then(() => {
        app.listen(PORT, () => console.log(`Server is listening at PORT : ${PORT}`))
    })
    .catch(err => console.log(err))