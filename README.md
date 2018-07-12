该仓库是fork阮一峰老师的关于Mocha框架入门教程案例的仓库：["测试框架 Mocha 实例教程"](http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html)

> "Mocha is a feature-rich JavaScript test framework running on Node.js and the browser, making asynchronous testing simple and fun."
>
> "Mocha是一个基于Node.js和浏览器上运行的功能丰富的JavaScript测试框架，它使得异步测试变得更加简单而有趣。"
>
> -- 官网：[Mochajs.org](https://mochajs.org/)

![](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015120301.png)

## 使用方法

首先, 克隆该仓库

```bash
$ git clone https://github.com/shuangmianxiaoQ/mocha-demos.git
```

然后, 在 `mocha-demos` 目录安装本地依赖，为了操作的方便，在全面也安装一下Mocha

```bash
$ cd mocha-demos
$ npm install
$ npm install --global mocha
```

进入 `demo01` 子目录

```bash
$ mocha add.test.js
```

其他案例参照博客教程进行学习和测试

## 目录

- [demo01: 基础用法](https://github.com/ruanyf/mocha-demos/tree/master/demo01)
- [demo02: 命令行参数](https://github.com/ruanyf/mocha-demos/tree/master/demo02)
- [demo03: 配置文件mocha.opts](https://github.com/ruanyf/mocha-demos/tree/master/demo03)
- [demo04: ES6测试](https://github.com/ruanyf/mocha-demos/tree/master/demo04)
- [demo05: 异步测试](https://github.com/ruanyf/mocha-demos/tree/master/demo05)
- [demo06: 测试用例的钩子](https://github.com/ruanyf/mocha-demos/tree/master/demo06)
- [demo07: 测试用例管理](https://github.com/ruanyf/mocha-demos/tree/master/demo07)
- [demo08: 浏览器测试](https://github.com/ruanyf/mocha-demos/tree/master/demo08)
- [demo09: 生成规格文件](https://github.com/ruanyf/mocha-demos/tree/master/demo09)
