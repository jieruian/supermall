
import Toast from './Toast'

const obj = {}
obj.install = function (Vue) {
// console.log('执行object的函数', Toast);

    //创建组件构造器
    const toastContrustor = Vue.extend(Toast)
   //new的方式，根据组件构造器，创建出一个组件对象
    const toast = new toastContrustor();
   // 将组件对象手动的挂在的某一个元素上
    toast.$mount(document.createElement('div'))
   //toast.$el对应的就是div
    document.body.appendChild(toast.$el)
    console.log('执行object的函数', toast);
    Vue.prototype.$toastSelf = toast
   
}
export default obj