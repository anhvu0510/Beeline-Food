const Passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const User = require('../Models/user.model');



//Login Local
Passport.use(
    'local.login',
    new localStrategy(
        {
            usernameField: 'username',
            passwordField: 'password',
        },
        async (user_name, password, done) => {
            User
                .findOne({ where: { user_name },attributes:['id','user_name','password'], raw: true })
                .then(user => {
                    if (!user) {
                        return done(null, false, { message: 'Account does not exist' });
                    } else if (!User.confirmPassword(password, user.password)) {
                        return done(null, false, {
                            message: 'Incorrect password, please check again',
                        });
                    }
                    return done(null, user);
                })
                .catch(err => console.log(err))
        }
    )
);

//Passport Init:
Passport.serializeUser(function (user, done) {
    return done(null, user.id);
});

Passport.deserializeUser((userId, done) => {
    User.findByPk(userId)
        .then((user) => {
            return done(null, user);
        })
        .catch((err) => console.log(err + ''));
});

module.exports = Passport;
