module.exports = function(config) {
  return [
    'plugin-global-logger',
    'plugin-logger',
    'plugin-static',
    'plugin-view',
    {
      name: 'plugin-redis',
      options: {
        
      }
    }
  ];
};
