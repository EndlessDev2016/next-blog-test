const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      eslint: {
        'react/no-children-prop': [false, {}],
      },
      reactStrictMode: true,
      env: {
        mongodb_username: 'lee',
        mongodb_password: 'dltmdgns',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-dev-site',
      },
    };
  }

  return {
    eslint: {
      'react/no-children-prop': [false, {}],
    },
    reactStrictMode: true,
    env: {
      mongodb_username: 'lee',
      mongodb_password: 'dltmdgns',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'my-site',
    },
  };
};
