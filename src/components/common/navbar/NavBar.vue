
<template>
    <div class='nav-bar'>
        <div class='left'><slot name="left">
           好的
         </slot></div>
        <div class="center"><slot name="center" id="center">


        </slot></div>
        <div class='right'><slot name="right">
            
        </slot></div>

    </div>
</template>

<script>
    export default {
       name: "NavBar"
    }
</script>

<style  scoped>
.nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100,100,100,.1);
    background-color: pink;
   

}
.right , .left{
    width: 60px;
}
.nav-bar .center {
    flex: 1;
    /* background-color: aquamarine */
}

#center {
   font-size: 14px; 
}

</style>