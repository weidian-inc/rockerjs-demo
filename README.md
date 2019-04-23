## run

node index // 使用config/app.config配置

NODE_ENV=dev node index // 使用config/app.dev.config配置

运行后，访问 `http://127.0.0.1:8080/home/a?name=someone&person={a:1,b:2}`

## specially

rockerjs/mvc基于配置运行，容器扫描所有的Bean，包括 Filter、Component、Controller等元素，分别在各个生命周期内初始化；

同时提供两种 starter 默认初始化 mysql 和 redis 操作， 只需在 app.config中的对应section中配置 starter 即可。