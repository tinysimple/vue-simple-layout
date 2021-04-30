<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <img-layout :options="imgOptions"></img-layout>
  </div>
</template>

<script>
import imgLayout from './components/layout/index';
export default {
  name: 'app',
  components: { imgLayout },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
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
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
