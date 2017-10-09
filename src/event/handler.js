export default {
  addHandler: function (element, type, handler) { //添加事件处理器
    if (element.addEventListener) { //检查dom2级支持
      element.addEventListener(type, handler, false)
    } else if (element.attachEvent) { //检查ie
      element.attachEvent('on' + type, handler)
    } else { //使用dom0级
      element['on' + type] = handler
    }
  },
  removeHandler: function (element, type, handler) { //取消事件处理器
    if (element.removeEventListener) {
      element.removeEventListener(type, handler, false)
    } else if (element.detachEvent) {
      element.detachEvent('on' + type, handler)
    } else {
      element['on' + type] = null
    }
  },
  getEvent: function (event) { //兼容获取事件
    return event ? event : window.event
  },
  getTarget: function (event) { //获取事件节点
    return event.target || event.srcElement
  },
  preventDefault: function (event) { //阻止默认行为
    if (event.preventDefault) {
      event.preventDefault()
    } else {
      event.returnValue = false
    }
  },
  stopPropagation: function (event) { //停止事件冒泡
    if (event.stopPropagation) {
      event.stopPropagation()
    } else {
      event.cancelBubble = true
    }
  },
  getRelatedTarget:function(event){ //获取事件相关的另一个节点,仅支持mouseout和mouseover事件
    if(event.relatedTarget)
      return event.relatedTarget
    else if(event.toElement)
      return event.toElement
    else if(event.fromElement)
      return event.fromElement
  }
}