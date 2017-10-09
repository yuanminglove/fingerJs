/**
 * json header
 * 
 * @author zido
 * @since 2017/6/3 0003
 */

import { assign } from '../utils'
/**
 * Accept代表发送端（客户端）希望接受的数据类型。 
 */
const header = {
  json: {
    'Accept': 'application/json',
    'Accept-Charset': 'utf-8',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
}

header.jsonBody = assign(header, {
  //json形式
  'Content-Type': 'application/json'
})

export default header
