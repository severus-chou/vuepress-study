### 数据类型

- String
- Number
- Boolean
- null
- undefined
- Object
- Symbol

### 对象的复制

```js
// 方法一
let user = {
  name: 'Jhon',
  age: 24
}
let clone = {} // 新的空对象
// 复制属性值
for (let key in user) {
  clone[key] = user[key]
}
// 复制的对象属性值是独立存在的
clone.name = 'Pete'

// 方法二
let clone = Object.assign({}, user)
```

### 对象的合并

```js
let user = {
  name: 'John'
}
let permissions1 = { canView: true }
let permissions2 = { canEdit: true }
Object.assign(user, permissions1, permissions2)
// user = {name:'Jhon',canView:true,canEdit:true}

// 如果接收的对象（user）已经有了同样属性名的属性，前面的属性值会被覆盖
// 覆盖 name，增加 isAdmin
Object.assign(user, { name: 'Pete', isAdmin: true })
// 现在 user = { name: "Pete", isAdmin: true }
```

### 比较运算符

- 比较运算符始终返回布尔值。
- 字符串的比较，会按照“词典”顺序逐字符地比较大小。
- 当对不同类型的值进行比较时，它们会先被转化为数字（不包括严格相等检测）再进行比较。
- 在非严格相等 `==` 下，`null` 和 `undefined` 相等且各自不等于任何其他的值。
- 在使用 `>` 或 `<` 进行比较时，需要注意变量可能为 `null/undefined` 的情况。比较好的方法是单独检查变量是否等于 `null/undefined`。

```js
null == undefined // true
null == 0 // false
null >= 0 // true
null == false // false
null >= false // true

undefined == 0 // false
undefined >= 0 // false
undefined == false // false
undefined >= false // false

'' == 0 // true
'' >= 0 // true
'' == false // true
'' >= false // true
```

### 如何从一个多层嵌套的循环中跳出来

```js
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`value at coords(${i},${j})`, '')
    if (input) break outer
  }
}
alert('done!')
```

### 模块查找机制

- 优先级由高到低
- 优先从缓存加载
- 核心模块
- 路径形式的文件模块
- 第三方模块
- node_modules/{模块名}/
- node_modules/{模块名}/package.json
- node_modules/{模块名}/package.json=>main
- index.js (备选项)
- 进入上一级目录找 node_modules
- 依次向上查找，直至磁盘，若还找不到，抛出错误
