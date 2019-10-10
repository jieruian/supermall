
import {debounce} from './utils.js'

export const itemListenerMixin =  {
    data() {
        return {
          imageItemListener:null
        }
    },
    //  mounted() {
    //    this.imageItemListener = () => {
    //      debounce(this.$refs.scroll.refresh, 80)
    //    }
    //    this.$bus.$on('itemImageLoad', this.imageItemListener)
    //    console.log('我是混入内容')
       
    //  },
     mounted() {
        // 1.图片加载完成的事件监听
         const refresh = debounce(this.$refs.scroll.refresh, 80)
         this.imageItemListener = () => {
           refresh()
         }
         this.$bus.$on('itemImageLoad', this.imageItemListener)
        //  console.log('我是混入内容')
     }
    
}
 export const backTopMixin = {
    data() {
      return {
        isShowToTop: false
      }
    },
    methods: {
      backTop() {
        this.$refs.scroll.scrollTo(0, 0);
      },
    },
 }