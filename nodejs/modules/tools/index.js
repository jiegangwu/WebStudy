const date = require('./src/dateFormat');
const excape = require('./src/html');

module.exports = {
  ...date,
  ...excape
}