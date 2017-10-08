/**
 * http ajax post方法
 * @author zido
 * @since 2017/6/3 0003
 */
const defaultReject = ({message = '服务器异常，请尝试刷新重试'}) => {
  console.error(message)
}

const createHttpPromise = (url, data = {}, headers = require('./HttpHeader').jsonBody, method = 'POST') => {
  return fetch(url, {
    method: method,
    headers: headers,
    body: data && JSON.stringify(data),
    credentials:'include',
    mode:'no-cors',
  }).then((response) => {
    if(!response.ok){
      return {
        success:false,
      }
    }
    const contentType = response.headers.get('content-type')
    console.log(contentType)
    if (contentType && contentType.indexOf('application/json') !== -1)
      return response.json()
    if(contentType)
      return response.text()
    return {
      success:false,
      message:'服务器未返回相应数据，请联系管理员',
    }
  }).catch(err => {
    throw {
      success:false,
      message:err.message,
    }
  }).catch((err) => {
    defaultReject(err)
    return err
  })
}
export default createHttpPromise