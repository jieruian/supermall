<template>
  <div id="cart">
    <nav-bar class="nav-bar"
      ><div slot="center">购物车({{ length }})</div></nav-bar>
    <scroll class="content"> 
     <cart-list></cart-list>
    </scroll>
     <bottom-bar class="bottom-bar"></bottom-bar>
  </div>
</template>

<script>
import navBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import CartList from "./childComps/CartList";
import BottomBar from './childComps/BottomBar';
import { mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {
    navBar,
    CartList,
    Scroll,
    BottomBar
  },

  computed: {
    ...mapGetters({
      length: "cartCount"
    })
  }
};
</script>

<style scoped>
#cart {
  position: relative;
  height: 100vh;
  /* padding-top: 44px; */
}
.nav-bar {
  color: white;
  background-color: var(--color-tint);
}
.content {
  position: absolute;
  top: 44px;
  bottom: 89px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.bottom-bar {
  position: absolute;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
