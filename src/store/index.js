import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shoplist: [],
  },
  mutations: {
    add(state,item){
      this.$store.state.push({
       price:item.price,
       jianshu:item.jianshu,
       zongjia:item.zongjia,
       zongjia:item.zongjia
      })
    },
    add(state, index) {
      state.shoplist[index].jianshu++;
      state.zongjia = 0;
      for (let i = 0; i < state.shoplist.length; i++) {
        state.zongjia += state.shoplist[i].jianshu * state.shoplist[i].price
      }

      state.zongjian=0;
      for(let i = 0; i < state.shoplist.length; i++){
        state.zongjian += state.shoplist[i].jianshu * state.shoplist[i].price
      }
    }
  },
})