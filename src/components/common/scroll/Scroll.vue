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

  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    },


  },

  data() {
    return {
      scroll: null
    };
  },

  mounted() {
    // 1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.warpper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });
    // 2.监听滚动的位置
    if (this.probeType == 2 || this.probeType == 3) {
      this.scroll.on("scroll", position => {
        // console.log(position);
        this.$emit("scroll", position);
      });
    }

    // 3.监听scroll滚动到底部
    if (this.pullUpLoad) {
      this.scroll.on('pullingUp', () => {  
        // console.log('开始加载更多');
              
          this.$emit("pullingUp")
        })
    }

    // this.scroll.on('pullingDown', () => {
    //      debugger;
    //       console.log("刷新啦")
    //     })
  },



  methods: {
    //跳转都顶部
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    //加载更多
     finishPullUp() {
        this.scroll && this.scroll.finishPullUp()
      },
    //刷新图片
    refresh() {
      console.log('----------');
        this.scroll && this.scroll.refresh()
      },
     //获取滚动的y值
    getScrollY() {
    return this.scroll ? this.scroll.y : 0
   }
    
  }
};
</script>

<style  scoped>
</style>