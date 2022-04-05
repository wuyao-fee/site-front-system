# site-front-system
vue博客前台系统

## 技术栈

vue2 + vue-router + vuex + mock + ES6 + axios + less

## 目标功能

- [x] 侧边导航功能
- [x] 个人信息展示功能

- [x] 渐进式轮播图功能
- [x] 文字渐进展示功能
- [x] 文章列表展示功能
- [x] 文章分类目录功能
- [x] 文章详细展示功能
- [x] 文章目录选中功能
- [x] 文章评论功能
- [x] 项目列表展示功能
- [x] 留言板展示功能
- [ ] 关于我展示功能（简历正在制作中）

## 项目运行

**注意：**

> 本次项目使用的node版本为：v16.13.1，vue-cli的版本为v4.5.11。

- 克隆项目源代码

  ```js
  git clone https://github.com/wuyao-fee/site-front-system.git
  ```

- 切换到目标文件夹

  ```js
  cd site-front-system
  ```

- 安装依赖库

  ```js
  npm install 或 yarn
  ```

- 运行项目

  ```js
  npm run serve
  ```

## 项目布局

```js
├── build                                       // webpack打包文件
├── public										//
├── src                                         // 源码目录
│   ├── api                              		// 封装api请求
│   ├── assets                              	// 静态资源
│   ├── components                              // 公共组件
│   ├── directives                              // 自定义指令
│   ├── mixins                              	// 组件混合
│   ├── mock                              		// 模拟数据
│   ├── router                              	// 路由
│   ├── store                              		// 共享数据仓库
│   ├── styles                              	// 样式
│   ├── utils                              		// 工具库
│   ├── views                              		// 页面
│   ├── App.vue                                 // 页面入口文件
│   ├── main.js                                 // 程序入口文件，加载各种公共组件
│   ├── urlConfig.js                            // 配置经常使用的url
├── package-lock.json                           // 包的详细信息
├── package.json                                // webpack配置及包管理
├── vue.config.js                               // vue-cli配置目录
```

## 接口数据

本项目有专门的后台服务器系统，但鉴于前后台系统项目展示分开进行，所以接口数据仅有mock模拟数据进行提供。

后续将会提供后台管理系统进行展示。

## 效果演示

[查看demo请点击这里]:https://wuyao-fee.gitee.io/site-front-system-demo/#/ （PC模式即可）
