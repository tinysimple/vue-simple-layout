# img-layout

> 一个基于Vue.js的高度灵活的自定义图片排列组件，基于flex布局

## 安装

Using npm
``` bash
npm i -S img-layout
```

全局组件：
``` bash
import img-layout from 'img-layout';
Vue.use(img-layout)
```

局部组件：
``` bash
import imgLayout from 'img-layout';
export default {
  components: { imgLayout },
}
```

使用示例：
``` bash
<template>
  <img-layout :options="imgOptions"></img-layout>
</template>
import imgLayout from 'img-layout';
export default {
  components: { imgLayout },
  data() {
    return {
      imgOptions: {
        direction: 'row',
        style: {
          height: '200px'
        },
        children: [
          {
            style: {
              width: '50%',
              backgroundColor: 'red',
            },
            img: {
              src: 'https://cn.vuejs.org/images/logo.png',
              properties: {
                title: 'Vue 红色背景'
              },
              style: {}
            },
            // 当同时存在width、style.width时，style.width优先级更高。
            // 能够直接配置的只有width、height、backgroudColor这三个属性，其他的属性设置请在style属性中添加。
            // width: '50%',
            // height: '200px',
            // backgroundColor: 'red'
          },
          {
            direction: 'column',
            style: {
              width: '50%',
            },
            // width: '50%',
            children: [
              {
                style: {
                  width: '100%',
                  height: '50%',
                  backgroundColor: 'green',
                },
                img: {
                  src: 'https://cn.vuejs.org/images/logo.png',
                  properties: {},
                  style: {}
                },
                // width: '100%',
                // height: '50%',
                // backgroundColor: 'green'
              },
              {
                direction: 'row',
                style: {
                  height: '50%',
                },
                // height: '50%',
                children: [
                  {
                    direction: 'column',
                    style: {
                      width: '50%',
                      height: '100%',
                    },
                    // width: '50%',
                    // height: '100%',
                    children: [
                      {
                        style: {
                          width: '100%',
                          height: '50%',
                          backgroundColor: 'blue',
                        },
                        img: {
                          src: 'https://cn.vuejs.org/images/logo.png',
                          properties: {},
                          style: {}
                        },
                        // width: '100%',
                        // height: '50%',
                        // backgroundColor: 'blue'
                      },
                      {
                        style: {
                          width: '100%',
                          height: '50%',
                          backgroundColor: 'darkslateblue',
                        },
                        img: {
                          src: 'https://cn.vuejs.org/images/logo.png',
                          properties: {},
                          style: {}
                        },
                        // width: '100%',
                        // height: '50%',
                        // backgroundColor: 'darkslateblue'
                      }
                    ]
                  },
                  {
                    style: {
                      width: '50%',
                      height: '100%',
                      backgroundColor: 'gold',
                    },
                    img: {
                      src: 'https://cn.vuejs.org/images/logo.png',
                      properties: {},
                      style: {}
                    },
                    // width: '50%',
                    // height: '100%',
                    // backgroundColor: 'gold'
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

> 当同时存在width、style.width时，style.width优先级更高。

> 能够直接配置的只有width、height、backgroudColor这三个属性，其他的属性设置请在style属性中添加。

效果展示：

![效果1](https://raw.githubusercontent.com/tinysimple/img-layout/master/src/assets/example1.PNG)

