<template>
    <div>
         <nav-bar>
             <div slot="left" @click="backClick">
                 <div class="back">
                     <img src="~assets/img/common/back.svg" >
                 </div>
             </div>
             
             <div slot="center" class="title">
             <div v-for="(item ,index) in titles" :key="(item,index)" 
             :class="{ active: index == currentIndex}"
             class="title-item"
             @click="itemClick(index)">
                 {{ item }}
             </div>
             </div></nav-bar>
 
    </div>
</template>

<script>
import navBar from "components/common/navbar/NavBar";
    export default {
       name: "DetailNavBar",
       components: {
              navBar,
       } ,
       data() {
           return {
               titles: ['商品', '参数', '评论', '推荐'],
               currentIndex: 0,
           }
       },
       methods: {
           itemClick(index){
               this.currentIndex = index
               
           } ,
           backClick() {
               console.log('看看那');
               
               this.$router.back();
           }
       },
    }
</script>

<style scoped>
.title {
    display: flex;
    font-size: 13px;
}

.title-item {
    flex: 1;

}
.active {
    color: var(--color-high-text);
}

.back img {
    margin-top: 12px;
    width: 20px;
    height: 20px;
}



</style>