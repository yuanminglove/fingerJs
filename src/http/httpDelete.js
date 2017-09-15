const createHttpPromise = require('./createHttpPromise')
/**
 * ajax delete 方法
 */
module.exports =  (url,data,headers = require('./HttpHeader').html) => {
  return createHttpPromise(url,data,headers,'DELETE')
}