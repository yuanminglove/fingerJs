/**
 * json header
 * 
 * @author zido
 * @since 2017/6/3 0003
 */
const header = {
  html: {
    'Accept': 'text/html; charset=utf-8',
  },
  json: {
    'Accept': 'application/json',
  },
}

header.jsonBody = Object.assign(header.json, {
  //json形式
  'Content-Type': 'application/json'
})

module.exports = header
