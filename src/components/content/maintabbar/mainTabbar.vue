<template>
  <div>
    <tab-bar>
      <tab-bar-item link="/home" avtiveColor="green">
        <img slot="item-icon" src="../../../assets/img/tabbar/home.svg" alt="" />
        <img
          slot="item-icon-active"
          src="../../../assets/img/tabbar/home_active.svg"
          alt=""
        />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item link="/category" avtiveColor="blueviolet">
        <img slot="item-icon" src="../../../assets/img/tabbar/category.svg" alt="" />
        <img
          slot="item-icon-active"
          src="../../../assets/img/tabbar/category_active.svg"
          alt=""
        />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item link="/cart" avtiveColor="blueviolet">
        <img slot="item-icon" src="../../../assets/img/tabbar/shopcart.svg" alt="" />
        <img
          slot="item-icon-active"
          src="../../../assets/img/tabbar/shopcart_active.svg"
          alt=""
        />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item link="/profile" avtiveColor="blueviolet">
        <img slot="item-icon" src="../../../assets/img/tabbar/profile.svg" alt="" />
        <img
          slot="item-icon-active"
          src="../../../assets/img/tabbar/profile_active.svg"
          alt=""
        />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import tabBar from "../../common/tabbar/tabbar";
import TabBarItem from "../../common/tabbar/TabBarItem";

export default {
  name: "mainTabbar",
  components: {
    tabBar,
    TabBarItem
  }
};
</script>

<style >
</style>