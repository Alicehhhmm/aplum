## 目录结构 

### script-
#### |_ build
npm run build将用于生产的应用程序构建到构建文件夹。它在生产模式下正确地捆绑了 React 并优化了构建以获得最佳性能,构建被缩小，文件名包括哈希值。
npm run build使用应用程序的生产版本创建一个构建目录。设置您最喜欢的 HTTP 服务器，以便为您网站的访问者提供 index.html，并且对 /static/js/main..js 等静态路径的请求与 /static/js/main..js 的内容一起提供文件。
Find out more about deployment here:

  https://cra.link/deployment
### src-

#### |_ apis：接口文件

#### |_ assets：放置原始(静态)资源文件。

#### |_ components：存放全局组件。

#### |_ router：路由文件夹。

#### |_ contants：常量文件夹，存放常量。

#### |_ views：页面文件夹。

#### |_ store：姿态管理文件。

#### |_ utils：存放一些常用函数的封装。