<template>
<div id="category">
 <mt-swipe :auto="2000" class="swiper">
  <mt-swipe-item v-for="(image, index) in images" :key="index">
    <img :src="image" alt="" srcset="">
  </mt-swipe-item>
</mt-swipe>

<div>我是啊啊啊</div>
</div>
</template>

<script>

  export default {
    name: "Category",
    data() {
      return {
        images: [
        'https://img.yzcdn.cn/vant/apple-2.jpg',
        'https://img.yzcdn.cn/vant/apple-1.jpg'
      ]
      }
    },
  }
</script>

<style scoped>
#category {
  position: relative;
  height: 100vh;
  background-color: white
}
.swiper {
  height: 300px;
  /* overflow: hidden; */
}
img {
  width: 100%;

}

</style>
