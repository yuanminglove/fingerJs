/**
 * 
 * @param {string} url url地址
 * 
 * @param {JSON} paramsObject 参数js对象
 * 
 * @returns {string} 新的url
 */
export default function(url,paramsObject){
  if (paramsObject) {
    let paramsArray = []
    Object.keys(paramsObject).forEach(key => {
      if(paramsObject[key] == null)
        return 
      if(!(paramsObject[key] instanceof Array))
        paramsArray.push(key + '=' + paramsObject[key])
      const array = paramsObject[key]
      for(let i = 0; i < array.length; i++){
        if(array instanceof Object){
          const item = array[i]
          for(let k in item){
            paramsArray.push(key+'.'+k + `[${i}]`+'='+ item[k])
          }
        }else{
          paramsArray.push(key+`[${i}]`+'='+array[i])
        }
      }
    })
    if (url.search(/\?/) === -1) {
      url += '?' + paramsArray.join('&')
    } else {
      url += '&' + paramsArray.join('&')
    }
  }
  return url
}