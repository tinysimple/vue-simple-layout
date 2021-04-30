import layout from './index.vue';

layout.install = Vue => Vue.component(layout.name, layout); // 注册组件

const install = function(Vue, opts = {}) {
  Vue.components(layout.name, layout);
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default layout;
