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
     // 1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.warpper, {
      click: true,
      probeType: this.probeType,
    })
    // 2.监听滚动的位置
    this.scroll.on('scroll', (position) => {
      // console.log(position);   
      this.$emit('scroll', position)         
    })
  },

  props: {
    probeType: {
        type: Number,
        default: 0
      }
  },

  data() {
    return {
      scroll: null
    };
  },
  
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);

    },
   
  }
};
</script>

<style  scoped>
</style>