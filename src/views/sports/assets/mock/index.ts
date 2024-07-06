export const baseRes = (fn: Function) => (...params: any) => ({
  code: 0,
  msg: 'success',
  data: fn(...params),
});

export default {

};
