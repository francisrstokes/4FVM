const { curry } = require('ramda');

module.exports = { C: curry((f, x, y) => f(y, x)) };