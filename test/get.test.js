const {get} = require('../src/http')

describe('fetch',function(){
  it('原声fetch应该没问题',function(){
    return fetch('https://www.baidu.com').then(response=>response.text()).then(text => console.log(text))
  })
})

describe('get', function () {
	
	it('应该能获取到json数据', function () {
    return get('//www.baidu.com').then(text => {
      console.log(text)
    })
	});

});