### express 学习记录

---

```sh
  # 安装
  npm install express -s
```

### 使用方法

```js
  // 使用方法
  let express = require('express)
  let app = express()
  app.listen(3000,callback())
  // Get请求例子
  app.get('/',(req,res)=>res.send('数据'))
  // 暴露public
  app.use('/public/',express.static('./public/'))
```
