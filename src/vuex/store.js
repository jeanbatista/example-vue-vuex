import Vue from 'vue'  
import Vuex from 'Vuex'

Vue.use(Vuex)

export default new Vuex.Store({  
    state: {
      user: {
        name: '',
        email: '',
        paswword: ''
      }      
    },
    mutations: {
      increment (state, obj) {
        // state.count = state.count + x;
        state.user = obj.user;
      }
    }    
  })