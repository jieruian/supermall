<template>
  <div @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>

    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>

    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    link: String,
    avtiveColor:{
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      // isActive: true
    };
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.link) !== -1
    },
    activeStyle(){
      return this.isActive ? { color: this.avtiveColor} : {}
    }
  },
  methods: {
    itemClick() {
      console.log('点击了Item哦'+ this.link);
      this.$router.push(this.link)
    
    }
  },
};
</script>

<style>
div {
  font-size: 12px;
  margin-top: 2px;
}

div img {
  margin-top: 5px;
  width: 22px;
  height: 22px;
  vertical-align: middle;
}

</style>