<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>

<tab-control
        class="tab-control"
        :titles="['流行', '新款', '推荐']"
        @tabClick="tabClick"
        v-show="isShowTabControl"
        ref="tabControl1"
      />

    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="scrollDelegate"
      :pullUpLoad="true"
      @pullingUp="loadMore"
    >

      <!-- <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/> -->
      <miti-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></miti-swiper>
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control

        :titles="['流行', '新款', '推荐']"
        @tabClick="tabClick"
        ref="tabControl2"
      />
      <good-list :goods="showGoods" class="good-list" />
    </scroll>
    <back-top @click.native="backTop" v-show="isShowToTop"></back-top>
  </div>
</template>

<script>
import navBar from "components/common/navbar/NavBar";
import { Swiper, SwiperItem } from "components/common/swiper";
import { getHomeMultidata, getHomeGoods } from "network/home";
import homeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";
import TabControl from "components/content/tabControl/TabControl";
import GoodList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";
import {debounce} from "common/utils";
import { itemListenerMixin } from "common/mixin.js";
import MitiSwiper from "./childComps/MitiSwiper";


export default {
  name: "Home",
  components: {
    navBar,
    homeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodList,
    Scroll,
    BackTop,
    MitiSwiper
  },
  mixins: [itemListenerMixin],
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShowToTop: false,
      screenWidth: 0,
      screenHeight: 0,
      isShowTabControl : false,
      tabOffsetTop: 0,
      saveY: 0
    };
  },
  created() {
    //获取轮播图
    this.getHomeMultidata();
    // 2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("sell");
    this.getHomeGoods("new");

  },
  // mounted() {
  //    // 1.图片加载完成的事件监听
  //     const refresh = debounce(this.$refs.scroll.refresh, 80)
  //     this.$bus.$on('itemImageLoad', () => {
  //       refresh()
  //     })
  // },

  computed: {

    showGoods() {
      return this.goods[this.currentType].list;
    }
  },

  beforeMount(height) {
    var h = document.documentElement.clientHeight || document.body.clientHeight;

    this.screenHeight = h; //减去页面上固定高度height
  },
  destroyed() {
    // console.log('被销毁');
    
  },
  activated() {
    // console.log('活跃状态');
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh()
  },  
  deactivated() {
    // console.log('不活跃状态');
    this.saveY = this.$refs.scroll.getScrollY()
    //移除item画面监听
    this.$bus.$off('itemImageLoad',this.imageItemListener)
    
  },


  methods: {
     swiperImageLoad() {
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
        // console.log('轮播图哦');

      },
    loadMore(){
      console.log("加载更多啦")
      this.getHomeGoods(this.currentType)
      this.$refs.scroll.finishPullUp()
    },

    scrollDelegate(position) {
      // 1.判断BackTop是否显示
      this.isShowToTop = -position.y > this.screenHeight;
       // 2.决定tabControl是否吸顶(position: fixed)
       this.isShowTabControl = (-position.y) > this.tabOffsetTop

    },

    tabClick(index) {
      console.log("点击了" + index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
       this.$refs.tabControl1.currentIndex = index;
       this.$refs.tabControl2.currentIndex = index;
    },

    backTop() {
      this.$refs.scroll.scrollTo(0, 0);
    },

    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        // console.log(this.banners);
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page)
        .then(res => {
          console.log("成功" + type);
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
        })
        .catch(err => {
          console.log(err);
          console.log("错误" + type);
        });
    }
  }
};
</script>

<style  scoped>
#home {
  position: relative;
  height: 100vh;
  background-color: white
  /* padding-top: 44px; */
}

.home-nav {
  background-color: var(--color-tint);
  color: rgb(255, 248, 248);
  /* position: absolute;
  top: 0px;
  left: 0px;
  right: 0px; */
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.tab-control {
    position: relative;
    z-index: 9;

}
</style>
