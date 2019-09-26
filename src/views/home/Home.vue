<template>
    <div id="home">
        <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
         <home-swiper :banners="banners" />
         <recommend-view :recommends='recommends' />
         <feature-view />


         
         <div>
             <br>
             <br>
             <br>
             <br>

             <h1>我是啊</h1>

             <br>
             <br>
         </div>

    </div>
</template>

<script>
import navBar from 'components/common/navbar/NavBar'
import {Swiper,SwiperItem} from 'components/common/swiper'
import {getHomeMultidata} from "network/home"
import homeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

    export default {
        name: 'Home',
        components: {
            navBar,
            homeSwiper,
            RecommendView,
            FeatureView
        },
        data() {
            return {
                banners: [],
                recommends: []
            }
        },
        created() {
           getHomeMultidata().then(res => {
               console.log(res)
               this.banners = res.data.banner.list
               this.recommends = res.data.recommend.list               
               console.log(this.banners)   
           }) 
        },
        
    }
</script>

<style  scoped>
.home-nav {
    background-color: var(--color-tint);
    color: white;
    font-size: 100px;
}


</style>