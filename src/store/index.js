import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    cartList: [],

  },
  getters,
  mutations: {
 /*   addCart(state, playload) {
      // 1.查看是否添加过
      let oldInfo = state.cartList.find(item => {
        //  console.log('vuex啦' + item.iid+ '====' + playload.iid);
        return item.iid == playload.iid
      })

      // 2.+1或者新添加
      if (oldInfo) {
        oldInfo.columns++
      } else {
        console.log('没有');

        playload.columns = 1
        //  playload.checked = true
        state.cartList.push(playload)
      }
      console.log(state.cartList);
    } */
    addConter(state,playload){
        playload.columns++
    },
    addToCart(state,playload){
       playload.columns = 1
       playload.checked = true
       state.cartList.push(playload)
    }
  },
  actions: {
    addCart(context, playload) {
      
      // 1.查看是否添加过
      let oldInfo = context.state.cartList.find(item => item.iid == playload.iid)

      // 2.+1或者新添加
      if (oldInfo) {
        // oldInfo.columns++
        context.commit('addConter',oldInfo)
      } else {
       /* playload.columns = 1
        context.state.cartList.push(playload)*/
        context.commit('addToCart', playload)
      }
    }

  }
})
