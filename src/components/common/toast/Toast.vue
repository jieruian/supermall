<template>
  <div id="toast" v-show="isShow">
    <div class="content">{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      
    }
  },
  props: {
    message: {
        type: String,
        default() {
          return "提示文本";
        }
      },
      isShow: {
          type: Boolean,
          default: false
      }
  },
  
  methods: {
      show(message ,duration) {
          this.message = message;
          this.isShow = true;
          setTimeout(() => {
              this.isShow = false;
              this.message = ""
          }, duration);    
      }
  },
};
</script>

<style  scoped>
#toast {
    position: fixed;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 8px,10px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 100000;
    border-radius: 10px
}
.content {
  margin: 15px 20px;
}
</style>