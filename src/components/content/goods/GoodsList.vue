<template>
  <div class="goods">
    <goods-list-item
      v-for="item in goods"
      :key="item + Math.random()"
      :goods="item"
    ></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      defaulf() {
        return [];
      }
    }
  },
  components: {
    GoodsListItem
  },
  methods: {
    
  }
};
</script>

<style  scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  padding: 2px;
}
</style>