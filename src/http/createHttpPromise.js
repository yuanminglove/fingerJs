/**
 * http ajax post方法
 * @author zido
 * @since 2017/6/3 0003
 */
import isEmpty from './isEmpty'
export const defaultReject = ({message = '服务器异常，请尝试刷新重试'}) => {
  console.error(message)
}

export const createHttpPromise = (url, data = {}, headers = require('./HttpHeader'), method = 'POST') => {
  return fetch(url, {
    method: method,
    headers: headers,
    body: data && JSON.stringify(data),
    credentials:'include',
  }).then((response) => {
    if(!response.ok){
      return {
        success:false,
      }
    }
    const contentType = response.headers.get('content-type')
    if (contentType && contentType.indexOf('application/json') !== -1)
      return response.json()
    if(contentType)
      return response.text()
    return {
      success:false,
      message:'服务器未返回相应数据，请联系管理员',
    }
  }).catch(err => {
    console.log('这里发生错误',err.message)
    throw {
      success:false,
      message:err.message,
    }
  }).then((json) => {
    if(json.success !== null && json.success === false){
      throw json
    }
    else{
      return json
    }
  }).catch((err) => {
    defaultReject(err)
    return err
  })
}
export default createHttpPromise