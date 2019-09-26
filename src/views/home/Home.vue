<template>
    <div id="home">
        <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
         <Swiper>
         <swiper-item v-for="item in banners" :key="item"> 
          <a :href="item.link">
              <img :src="item.image" alt="">
          </a>
          </swiper-item> 
         </Swiper>

    </div>
</template>

<script>
import navBar from 'components/common/navbar/NavBar'
import {Swiper,SwiperItem} from 'components/common/swiper'
import {getHomeMultidata} from "network/home";

    export default {
        name: 'Home',
        components: {
            navBar,
            SwiperItem,
            Swiper
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
    font-size: 28px;
}


</style>