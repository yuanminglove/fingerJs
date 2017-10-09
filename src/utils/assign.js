/**
 * 浅复制的简单实现。
 * @param {*Object} target 目标对象 
 * @param {*Object} origins 多源对象 
 */
export default function (target, ...origins) {
  origins.forEach(function (origin) {
    for (let name in origin) {
      target[name] = origin[name]
    }
  })
  return target
}