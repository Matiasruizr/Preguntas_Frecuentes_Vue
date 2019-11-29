import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      count: 0,
    },
    upList: [{name: 'Preguntas Frecuentes'}],
    mutations:
     {
      increment (state, element) {
        // mutate state
        
        state.count = element
      },

       update_upList (state, element) {
           
       state.upList.push({name: element}) 
   
       },
       indexUpList(state, element) {
       state.index = state.array.name.indexOf(element)
   
       }
     },

  });
