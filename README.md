# vue-simple-layout

> 一个基于Vue.js的高度灵活的自定义元素排列布局组件，基于flex布局。

## 安装

Using npm
``` bash
npm i -S vue-simple-layout
```

全局组件：
``` bash
import vueSimpleLayout from 'vue-simple-layout';
Vue.use(vueSimpleLayout)
```

局部组件：
``` bash
import vueSimpleLayout from 'vue-simple-layout';
export default {
  components: { vueSimpleLayout },
}
```

使用示例：
``` bash
<template>
  <vue-simple-layout :options="layoutOptions" :border="true">
      <template slot="box-1">
        <div>区域一</div>
      </template>
      <template slot="box-2">
        <div>区域二</div>
      </template>
      <template slot="box-3">
        <div>区域三</div>
      </template>
      <template slot="box-4">
        <div>区域四</div>
      </template>
      <template slot="box-5">
        <div>区域五</div>
      </template>
    </vue-simple-layout>
</template>
import vueSimpleLayout from 'vue-simple-layout';
export default {
  components: { vueSimpleLayout },
  data() {
    return {
      layoutOptions: {
        direction: 'row',
        height: '200px',
        children: [
          {
            width: '50%',
            slot: 'box-1'
          },
          {
            direction: 'column',
            width: '50%',
            children: [
              {
                width: '100%',
                height: '50%',
                slot: 'box-2'
              },
              {
                direction: 'row',
                height: '50%',
                children: [
                  {
                    direction: 'column',
                    width: '50%',
                    height: '100%',
                    children: [
                      {
                        width: '100%',
                        height: '50%',
                        slot: 'box-3'
                      },
                      {
                        width: '100%',
                        height: '50%',
                        slot: 'box-4'
                      }
                    ]
                  },
                  {
                    width: '50%',
                    height: '100%',
                    slot: 'box-5'
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  }
}
```
注意：

> 当layoutOptions对象中出现direction字段时，表示为一个容器，不能写入具体的内容，只能用来作为存放其children属性中的父元素。

> direction 为 flex-direction 支持的所有值。

效果展示：

![效果2](https://raw.githubusercontent.com/tinysimple/vue-simple-layout/master/src/assets/example2.PNG)

![效果1](https://raw.githubusercontent.com/tinysimple/vue-simple-layout/master/src/assets/example1.PNG)

