var env = process.env.NODE_ENV || 'development';

var config = {
    development: {
        server: {
        },
        mongo: {
            url: 'mongodb://localhost/Cyanide'
        }
    },
    production: {
        server: {

        },
        mongo: {
            url: process.env.MONGO_URI
        }
    }
};

module.exports = config[env];