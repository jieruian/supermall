<template>
    <div>
        <Swiper>
         <swiper-item v-for="(item) in banners" :key="item+Math.random()"> 
          <a :href="item.link">
              <img :src="item.image" alt="" @load="imageLoaded">
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
            test : String,
        },
        data() {
            return {
                isLoad: false
            }
        },
        components: {
            SwiperItem,
            Swiper 
        },
        methods: {
            imageLoaded() {
                if (!this.isLoad) {
                    this.$emit('swiperImageLoad')
                    this.isLoad = true
                }
                
            }
        },

       
    }
</script>

<style  scoped>

</style>