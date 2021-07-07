/*
 * device authentication - with passport
 */

const {
  Strategy, ExtractJwt 
} = require("passport-jwt");
const { JWT } = require("./authConstant");
const user = require("../model/user");

module.exports = {
  devicePassportStrategy: passport => {
    const options = {};
    options.jwtFromRequest =ExtractJwt.fromAuthHeaderAsBearerToken();        options.secretOrKey = JWT.DEVICE_SECRET;
    passport.use('device-rule',
      new Strategy(options, (payload, done) => {
        user.findOne({ email: payload.email }, (err, user) => {
          if (err) {
            // console.log(err)
            return done(err, false);
          }
          if (user) {
            return done(null, {...user.toJSON()});
          }
          return done('No User Found', {});
        });
      })
    );
  }
};