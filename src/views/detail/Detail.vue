<template>
  <div id="detail">
    <detail-nav-bar @titleClick="titleClick" ref="detailnav" />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
    >
      <detail-swiper :top-images="topImages" ref="base"></detail-swiper>
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info :param-info="paramInfo" ref="param" />
      <detail-comment-info
        ref="comment"
        :comment-info="commentInfo"
      ></detail-comment-info>
      <goods-list :goods="recommendList" ref="recommend"></goods-list>
    </scroll>
    <detail-bottom-bar
      @addToCart="addToCart"
      class="bottom-bar"
    ></detail-bottom-bar>
    <back-top @click.native="backTop" v-show="isShowToTop"></back-top>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";
import BackTop from "components/content/backTop/BackTop";

import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/GoodsList";

import { debounce } from "common/utils";
import { itemListenerMixin,backTopMixin } from "common/mixin.js";

import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParam
} from "network/detail";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    Scroll,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    BackTop
  },
  mixins: [itemListenerMixin,backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommendList: [],
      themeTops: [],
      currentIndex: 0,
    };
  },
  // mounted() {
  //     this.imageItemListener =() =>{
  //        debounce(this.$refs.scroll.refresh, 80)
  //     }
  //     this.$bus.$on('itemImageLoad', this.imageItemListener)
  // },
  destroyed() {
    this.$bus.$off("itemImageLoad", this.imageItemListener);
  },

  created() {
    // 1.保存传入的iid
    this.iid = this.$route.params.iid;
    // 2.根据iid请求详情数据
    getDetail(this.iid).then(res => {
      //   console.log(res);
      const data = res.result;
      // 1.获取顶部的图片轮播数据
      this.topImages = data.itemInfo.topImages;
      // 2.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 3.创建店铺信息的对象
      this.shop = new Shop(data.shopInfo);

      // 4.保存商品的详情数据
      this.detailInfo = data.detailInfo;

      // 5.获取参数的信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // 6.保存评论信息
      if (data.rate.list) {
        this.commentInfo = data.rate.list[0];
        console.log(this.commentInfo);
      }
    });
    getRecommend().then(res => {
      // console.log('推荐数据');
      // console.log(res);
      this.recommendList = res.data.list;
    });
  },
  methods: {
    addToCart() {
      console.log("加入购物车");
      // 1.创建对象
        const product = {}
        // 2.对象信息
        product.iid = this.iid;
        product.imgURL = this.topImages[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.newPrice = this.goods.newPrice;
        // this.$store.commit('addCart',product);
        this.$store.dispatch('addCart',product)
    },
    imageLoad() {
      this.$refs.scroll.refresh();

      // debounce(() => {
      this.themeTops = [];
      this.themeTops.push(0);
      this.themeTops.push(this.$refs.param.$el.offsetTop);
      this.themeTops.push(this.$refs.comment.$el.offsetTop);
      this.themeTops.push(this.$refs.recommend.$el.offsetTop);
      this.themeTops.push(Number.MAX_VALUE);
      // console.log(this.themeTops);
      // }, 400);
    },
    titleClick(index) {
      console.log("点击了" + index);
      this.$refs.scroll.scrollTo(0, -this.themeTops[index], 900);
    },
    contentScroll(position) {
      // 1.监听backTop的显示
      this.isShowToTop = position.y < -1000;
      // 2.监听滚动到哪一个主题
      this._listenScrollTheme(-position.y);
    },
    _listenScrollTheme(position) {
      let length = this.themeTops.length;
      for (let i = 0; i < length; i++) {
        let iPos = this.themeTops[i];
        /**
         * 判断的方案:
         *  方案一:
         *    条件: (i < (length-1) && currentPos >= iPos && currentPos < this.themeTops[i+1]) || (i === (length-1) && currentPos >= iPos),
         *    优点: 不需要引入其他的内容, 通过逻辑解决
         *    缺点: 判断条件过长, 并且不容易理解
         *  方案二:
         *    条件: 给themeTops最后添加一个很大的值, 用于和最后一个主题的top进行比较.
         *    优点: 简洁明了, 便于理解
         *    缺点: 需要引入一个较大的int数字
         * 疑惑: 在第一个判断中, 为什么不能直接判断(currentPos >= iPos)即可?
         * 解答: 比如在某一个currentPos大于第0个时, 就会break, 不会判断后面的i了.
         */
        if (position >= iPos && position < this.themeTops[i + 1]) {
          if (this.currentIndex !== i) {
            this.currentIndex = i;
            this.$refs.detailnav.currentIndex = this.currentIndex;
          }
          break;
        }
      }
    }
  }
};
</script>

<style  scoped>
#detail {
  background-color: white;
  z-index: 9;
  position: relative;
  height: 100vh;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 58px;
  left: 0;
  right: 0;
  overflow: hidden;

  /* height: calc(100% - 44px); */
}
.bottom-bar {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 58px;
}
</style>