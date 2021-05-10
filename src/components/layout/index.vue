<template>
  <div style="display: flex;" :style="{'flex-direction': options.direction, 'flex-wrap': 'nowrap', width: options.width, height: options.height }">
		<template v-for="(item, key) in options.children">
			<div v-if="isRenderContent(!item.direction, item.slot)" :key="key" :style="{ width: item.width, height: item.height }" :class="'layout-content-container' + (border ? ' has-border' : '')">
        <slot :name="item.slot" style="width: 100%; height: 100%;">暂无内容</slot>
			</div>
			<template v-else>
				<img-layout :options="item" :key="key" :border="border">
          <template v-if="restSlotKeys && restSlotKeys.length > 0">
						<template v-for="(slotName, index) in restSlotKeys" :slot="slotName">
							<slot :name="slotName"></slot>
						</template>
					</template>
        </img-layout>
			</template>
		</template>
	</div>
</template>

<script>
export default {
  name: 'img-layout',
  props: {
    options: {
      type: Object,
      require: true
    },
    border: {
      type: Boolean,
      reqyure: false,
      default: false
    }
  },
  data() {
    return {
      usedSlot: null
    }
  },
  computed: {
    restSlotKeys() {
      return this.usedSlot ? Object.keys(this.$slots).filter(item => item !== this.usedSlot) : Object.keys(this.$slots);
    }
  },
  methods: {
    isRenderContent(renderContentFlag, slot) {
      if (renderContentFlag) {
        this.usedSlot = slot
      }
      return renderContentFlag;
    }
  }
}
</script>
<style scoped>
  .layout-content-container{
    overflow: auto;
    box-sizing: border-box;
  }
  .has-border{
    border: 1px solid #DCDFE6;
  }
</style>
