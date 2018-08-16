# Micro-frontends in Practice

There are many approaches to implementing micro-frontends. This approach uses React and Redux by exposing a react component, action creators and reducer to be added to the wrapper application's redux store.

1. Generate assets to be embeded as a micro-frontend `webpack.config.js`;
2. Expose paths embed assets as an endpoint `server.js`;
3. Make sure the app works standalone and embeded;