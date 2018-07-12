var expect = require('chai').expect;

describe('beforeEach示例', function() {
  var foo = false;

  // 在describe块中，提供测试用例的4个钩子：before(), after(), beforeEach()和afterEach()
  beforeEach(function() {
    foo = true;
  });

  it('修改全局变量应该成功', function() {
    expect(foo).to.be.equal(true);
  });
});
