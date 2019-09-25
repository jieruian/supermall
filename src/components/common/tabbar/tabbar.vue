<template>
  <div id="tab-bar">
      <slot></slot>  
  </div>
</template>

<script>
export default {
  name: "tabBar"
};
</script>

<style>
#tab-bar {
  background-color: #f6f6f6;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 49px;
  text-align: center;
  box-shadow: 0px, -2px, 10px, rgba(185, 33, 33, 0.9);

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}



/* #tab-bar div{
  box-shadow: 0px ,-2px , 10px,rgba(185, 33, 33, 0.9);
  background-color: blueviolet;
} */
</style>