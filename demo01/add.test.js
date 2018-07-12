var add = require('./add.js');
var expect = require('chai').expect;    // 引入断言库chai,并制指定使用它的expect断言风格，很接近自然语言

// describe块称为“测试套件”（test suite）
describe('加法函数的测试', function() {
  // it块称为“测试用例”（test case）
  it('1 加 1 应该等于 2', function() {
    expect(add(1, 1)).to.be.equal(2);
  });
});
