### 常用命令

```sh
  # 使用数据库
  use ${dbName}

  # 查看所有数据库
  show dbs

  # 查看当前操作的数据库
  db #

  # 查看当前数据库下数据
  show collections

  # 插入一条数据
  db.${docName}.insertOne(${json对象})

  # 查看当前文档内数据
  db.${docName}.find()
```
