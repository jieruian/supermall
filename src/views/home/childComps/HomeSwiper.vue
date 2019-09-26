<template>
    <div>
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
import {Swiper,SwiperItem} from 'components/common/swiper'

    export default {
        name: 'homeSwiper',
        props: {
            banners: {
                type: Array,
                default(){
                    return []
                }
            },
            test : String
        },
        components: {
            SwiperItem,
            Swiper 
        }

        
    }
</script>

<style  scoped>

</style>