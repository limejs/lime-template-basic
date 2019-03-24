module.exports = function (options) {
  return {
    service(proto, config) {
      console.log('redis config', config.redis)
      proto.redis = function () {}
    }
  }
}
