/**
 * Created by duatis on 17/11/2016.
 */
var config = require('./config'),
    mongoose   = require('mongoose').connect(config.mongo.url);
mongoose.Promise = global.Promise;

module.exports = mongoose;