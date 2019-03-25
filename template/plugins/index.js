module.exports = function(config) {
  return [
    'plugin-global-logger',
    'plugin-logger',
    'plugin-static',
    'plugin-view',
    'plugin-service',
    {
      name: 'plugin-redis',
      options: {
        
      }
    }
  ];
};
