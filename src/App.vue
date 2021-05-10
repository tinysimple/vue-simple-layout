<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <img-layout :options="layoutOptions" :border="true">
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
    </img-layout>
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
</script>

<style>
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
