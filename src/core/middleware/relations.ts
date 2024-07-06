/*
 * 
 * 
 * 
 * @FilePath: /sports/src/core/middleware/relations.ts
 * @Description: relations 中间件
 */

export default (store:any) => (next:any) => (action:any) => {
  if (!action.relations || typeof action.relations !== 'function') {
    return next(action);
  }
  action.relations({dispatch: store.dispatch, store: store.getState()});
  return next(action);
};
