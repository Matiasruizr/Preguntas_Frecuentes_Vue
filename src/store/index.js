import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);


export default const store = new Vuex.Store({
    state: {
      actCat: 0,
    },
    mutations: {
      increment (state, element) {
        // mutate state
        state.actCat= element
      }
    }
  })