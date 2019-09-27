<template>
  <div class="warpper" ref="warpper">
    <div class="scroll-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  mounted() {
    this.scroll = new BScroll(this.$refs.warpper, {
      click: true
    });
  },
  data() {
    return {
      scroll: null
    };
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    }
  }
};
</script>

<style  scoped>
</style>