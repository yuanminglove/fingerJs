import createHttpPromise from './createHttpPromise'
/**
 * ajax delete 方法
 */
export default (url,data,headers = require('./HttpHeader').html) => {
  return createHttpPromise(url,data,headers,'DELETE')
}