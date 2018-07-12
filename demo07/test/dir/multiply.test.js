var multiply = require('../../src/multiply');
var expect = require('chai').expect;

describe('乘法函数的测试', function() {
  // 跳过带有skip方法的测试用例或测试套件
  it.skip('1 乘 1 应该等于 1', function() {
    expect(multiply(1, 1)).to.be.equal(1);
  });

  it('任何数 乘 0 应该等于 0', function() {
    expect(multiply(1, 0)).to.be.equal(0);
  });
})
