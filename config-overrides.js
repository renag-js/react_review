// 配置具体的修改规则
/**
 * 
 *  package.json里面的启动命令也需要修改，下面是需要修改的代码
  "scripts": {
    -   "start": "react-scripts start",
    +   "start": "react-app-rewired start",
    -   "build": "react-scripts build",
    +   "build": "react-app-rewired build",
    -   "test": "react-scripts test",
    +   "test": "react-app-rewired test",
    }
 */

// module.exports = function override(config, env) {
//   // do stuff with the webpack config...
// 这个config可以接受到原有的配置信息
//   return config;
// };

// 这个是老版本的写法；目前按需引入的的方式还能用

// const { override, fixBabelImports, addLessLoader } = require("customize-cra");

// module.exports = override(
//   fixBabelImports("import", {
//     libraryName: "antd", // 按需引入的库名
//     libraryDirectory: "es", // 按需引入的语法规范
//     //  style: 'css', //按需引入的样式是css
//     style: true,
//   }),
// 老板本的自定义主题这块不能这样写，会报错，要写成这样的话需要降低less和less-loader版本我3x和7x
//   addLessLoader({
//     lessOptions:{
//       javascriptEnabled: true,
//       modifyVars: { "@primary-color": "#1DA57A" },
//     }
//   })
// );


