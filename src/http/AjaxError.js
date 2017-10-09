function AjaxError(message = 'ajax 请求出错'){
  this.name = 'restError'
  this.message = message
}

AjaxError.prototype = new Error()

export default AjaxError