/**
 * http ajax post方法
 * @author zido
 * @since 2017/6/3 0003
 */

import AjaxError from './AjaxError'

const defaultParam = {
  data: {},
  headers: require('./HttpHeader').jsonBody,
  method: 'POST',
  credentials: 'include',
  mode: 'no-cors',
}


/**
 * 默认为post配置
 * @param {JSON} option 
 */
const ajax = (option = defaultParam) => {
  let url
  if (typeof option == 'string') {
    url = option
    option = defaultParam
  }
  else if ((typeof option == 'object') && option != null) {
    url = option.url
  }
  const { data, headers, method, credentials, mode, onError } = option
  return fetch(url, {
    method,
    headers,
    body: data && JSON.stringify(data),
    credentials,
    mode,
  }).then((response) => {
    if (!response.ok) {
      throw new AjaxError()
    }
    try{
      const contentType = response.headers.get('content-type')
      if (contentType && contentType.indexOf('application/json') !== -1)
        return response.json()
    }catch(e){
      throw new AjaxError(e.message)
    }
    throw new AjaxError('服务器未返回正确的信息')
  }).catch((err) => {
    /**
     * 如果设置了onError处理，则会进行onError处理，如果onError有返回值，则会将其返回给下一个then，否则返回{
     *   success:false,
     *   message:err.message,
     * }
     */
    let result = null
    if(!(err instanceof AjaxError))
      throw err
    if (onError instanceof Function)
      result = onError(err)
    if(result)
      return result
    if (err instanceof AjaxError) {
      return {
        success:false,
        message:err.message,
      }
    }
    
  })
}
export default ajax