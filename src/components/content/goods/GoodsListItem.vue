<template>
  <div class="goods-item" @click="itemClick">
      <img v-lazy="getImages" alt="" @load="imageLoad" />
      <div class="goods-info">
        <p>{{ goods.title }}</p>
        <span class="price">¥{{ goods.price }}</span>
        <span class="collect">{{ goods.cfav }}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    getImages(){
    return this.goods.image ? this.goods.image : this.goods.show.img
  }
    
  },
  methods: {
    imageLoad() {
        // this.$bus.$emit('itemImageLoad')
        // console.log('图片加载啦')

        // 根据不同的内容发送不同的全局通知
        // if (this.$route.path.indexOf('detail')) {
        //   this.$bus.$emit('detailItemImageLoad')
        // }else if(this.$route.path.indexOf('home')){
        //   this.$bus.$emit('homeItemImageLoad')
        // }
        
        this.$bus.$emit('itemImageLoad')      
      },
    itemClick() {
      console.log("点击了详情"+this.goods.iid);
      this.$router.push('/detail/' + this.goods.iid)
    }

  },
};
</script>

<style scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center; /* 能控制span居中 */
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 0px;
  width: 13px;
  height: 13px;
  background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>