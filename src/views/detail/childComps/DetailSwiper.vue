
<template>
    <div>
        <swiper class="detail-swiper">
            <swiper-item v-for="(item, index) in topImages" :key="(index,item)">
                <img :src="'http:'+ item" alt="">
            </swiper-item>

        </swiper>

    </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'

    export default {
        name: 'DetailSwiper',
        components: {
            Swiper,
            SwiperItem
        },
        
        props: {
            topImages:{
                type: Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style  scoped>
.detail-swiper {
    height: 280px;
    overflow: hidden;
}

</style>