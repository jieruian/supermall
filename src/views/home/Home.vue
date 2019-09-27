<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners" />
    <recommend-view :recommends="recommends" />
    <feature-view />
    <tab-control class="tab-control" :titles="['流行', '新款', '推荐']" @tabClick="tabClick"/>
    <good-list :goods="showGoods"  class='good-list'/>

    <div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      <h1>我是啊</h1>

      <br />
      <br />
    </div>
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

export default {
  name: "Home",
  components: {
    navBar,
    homeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodList
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: 'pop',
    }
  },
  created() {
    //获取轮播图
    this.getHomeMultidata();
    // 2.请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('sell')
      this.getHomeGoods('new')
  },

  computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
  },

  methods: {
      tabClick(index) {
       console.log('点击了'+index);
       switch (index) {
           case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }

    },



    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        // console.log(this.banners);
      });
    },
    getHomeGoods(type){
        const page = this.goods[type].page+1;
        getHomeGoods(type,page).then(res =>{
            console.log('成功'+type);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        }).catch(err => {
            console.log(err); 
            console.log('错误'+type);           
        });
    },   
  }
}
</script>

<style  scoped>
.home-nav {
  background-color: var(--color-tint);
  color: white;
}
.tab-control {
  position: sticky;
  top: 0px;
  z-index: 2;
}

</style>