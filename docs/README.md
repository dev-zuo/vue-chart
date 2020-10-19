
# vue-chart

用于测试怎么写一个组件库，并为该组件库做一个类似 Elmenet 官网的文档

## 目录结构
```bash
docs # 文档目录
examples # vue测试demo
lib # umd构建生成目录
packages # UI组件源码目录
src # 主入口目录 src/index.js 
staticDemo # 静态页面引入测试demo
publish.sh # npm包上传脚本
vue.config.js # vue-cli-service打包配置
# test # TODO 单元测试目录
# types # TODO ts支持目录

```

## examples处理
```bash
# 创建examples vue标准项目
vue create vue-chart-examples
? Please pick a preset: Manually select features
? Check the features needed for your project: Choose Vue version, Babel, Router, CSS Pre-processors, Linter
? Choose a version of Vue.js that you want to start the project with 2.x
? Use history mode for router? (Requires proper server setup for index fallback in production) No
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Less
? Pick a linter / formatter config: Prettier
? Pick additional lint features: Lint on save
? Where do you prefer placing config for Babel, ESLint, etc.? In package.json
? Save this as a preset for future projects? (y/N) n
```

## docs
```bash
# 全局安装 docsify-cli
sudo npm i docsify-cli -g
# 创建一个新的项目docs
docsify init ./docs  
# 默认会把当前目录的 README.md copy到docs目录，作为主页
# Initialization succeeded! Please run docsify serve ./docs
# 运行
docsify serve ./docs
# Serving /Users/guoqzuo/Desktop/gitclone/vue-chart/docs now.
# Listening at http://localhost:3000
```

## 组件
### my-button
my-button组件是一个测试按钮组件

<vuep template="#myButton"></vuep>
<script v-pre type="text/x-template" id="myButton">
<template>
  <my-button>{{ btnName }}</my-button>
</template>

<script>
 module.exports = {
    data() {
      return {
        btnName: "我的按钮"
      }
    }
  }
</script>


### z-chart
z-chart组件是基于echarts的组件，只需要设置父容器的宽高，再设置 options 值即可。

<vuep template="#basicBar"></vuep>
<script v-pre type="text/x-template" id="basicBar">
<template>
  <div style="width:100%; height:100%;">
    <z-chart :options="chartData" />
  </div>
</template>

<script>
 module.exports = {
    created () {
      this.chartData = {
          title: {
            text: "ECharts 入门示例"
          },
          tooltip: {},
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [
            {
              name: "销量",
              type: "bar",
              data: [5, 20, 36, 10, 10, 20]
            }
          ]
        }
    }
  }
</script>