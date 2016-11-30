const apiRouter = require('express').Router();
const { getSecretStuff } = require('../models/stuff.js');

apiRouter.route('/stuff')
  .get(getSecretStuff, (req, res) => res.json(res.data))

module.exports = apiRouter;
