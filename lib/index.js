const getStatus = require("./check");

module.exports = (uri, callback) => {
    return new Promise((resolve, reject) => {
        getStatus(uri, (error, statusCode) => {
        if (error) {
          return callback ? callback(error, null) : reject(error)
        } else {
          return callback ? callback(null, statusCode) : resolve(statusCode)
        }
      })
    })
  }

