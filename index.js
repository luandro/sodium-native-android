var sodium = require('bindings')({
  bindings: 'sodium.node',
  name: 'sodium-native-android'
})

module.exports = sodium
