/**
 * http ajax get方法
 * @author zido
 * @since 2017/6/3 0003
 */
import ajax from './ajax'
import addDataToUrl from './addDataToUrl'

/**
 * GET方法要求服务器将URL定位的资源放在响应报文的数据部分，回送给客户端,传递参数长度受限制,此方法用于restful风格，仅用于请求json数据
 * 
 * @param {string} url url地址
 * @param {JSON} paramsObject 参数json对象
 * @param {JSON} headers http头
 */
export default function(url, paramsObject, headers = require('./HttpHeader').json){
  addDataToUrl()
  return ajax({
    url,
    data:null,
    headers,
    method:'GET'
  })
}