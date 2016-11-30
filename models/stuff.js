const db = require('../db/db.js');

function getSecretStuff(req, res, next) {
  db.many('SELECT * FROM secretStuff')
    .then((data) => {
      res.data = data
      next();
    })
  .catch(error => console.log(error))
}

module.exports = {
  getSecretStuff
}
