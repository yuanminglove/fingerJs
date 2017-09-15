import {get} from '../src/http'

describe('get', function () {
	
	it('应该能获取到json数据', function () {
    return get('http://www.chuangyuandi.net.cn/api/v1/commodities/pages',{
      p:1
    }).then(json => {
      console.log(json)
      expect(json['success']).to.equal(true)
    })
	});

});