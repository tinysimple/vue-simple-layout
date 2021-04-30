<template>
  <div style="display: flex;" :style="{'flex-direction': options.direction, 'flex-wrap': 'nowrap', width: options.width, height: options.height, ...options.style }">
		<template v-for="(item, key) in options.children">
			<div v-if="!item.direction" :key="key" :style="{ width: item.width, height: item.height, backgroundColor: item.backgroundColor, ...item.style }">
				<img v-bind="item.img.properties" :style="item.img.style" :src="item.img.src" />
			</div>
			<template v-else>
				<img-layout :options="item" :key="key"></img-layout>
			</template>
		</template>
	</div>
</template>

<script>
export default {
  name: 'img-layout',
  props: {
    options: Object,
    require: true
  },
  data() {
    return {

    }
  }
}
</script>
<style scoped>
  img{
    max-width: 100%;
    max-height: 100%;
  }
</style>
