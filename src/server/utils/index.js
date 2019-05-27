export const applyMiddleware = (middleware, router) =>
  middleware.forEach (func => func (router));

export const applyRoutes = (routes, router) => {
  routes.forEach (route => {
    const {method, path, handler} = route;
    router[method] (path, handler);
  });
};
