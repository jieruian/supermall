<template>
    <div>
        <cart-list-item v-for="(item, index) in cartList" :key="(item,index)" :item-info="item"></cart-list-item>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CartListItem from './CartListItem'

 export default {
      name: "CartList",
      components: {
          CartListItem,
      },
      computed: {
        ...mapGetters([
            'cartList',
        ])
    },

 }
</script>

<style  scoped>

</style>