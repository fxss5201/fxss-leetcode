# fxss-leetcode 算法

[![Coverage Status](https://coveralls.io/repos/github/fxss5201/fxss-leetcode/badge.svg?branch=main)](https://coveralls.io/github/fxss5201/fxss-leetcode?branch=main)

leetcode 算法集用于记录 leetcode 算法和平常想到的一些算法题，可以在 test 目录使用 vitest 测试，并以 vitepress 文档进行展示。

安装项目：

```sh
npm i
```

测试算法：

```sh
npm run test
```

文档展示：

```sh
npm run docs:dev
```

由于每次需要创建的文档比较多，所以专门增加了命令行创建、删除文件：

创建文件：

```sh
npm run add
```

按照命令行输入选择，可以直接创建代码段文件、测试文件、文档文件。leetcode 代码段标题以数字序号开头的，会自动排序。

删除文件：

```sh
npm run rm
```

按照命令行输入选择，删除所有相关文件。
