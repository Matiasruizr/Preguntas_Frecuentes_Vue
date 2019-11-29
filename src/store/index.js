import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      count: 0,
    },
    upList: [{name: 'Preguntas Frecuentes', id: null, id_padre: 0}],

    mutations:
     {
      increment (state, element) {
        // mutate state
        
        state.count = element
      },

       update_upList (state, element) {
        
        this.upList.push({name: element.name, id: element.id, id_padre: element.id_padre})  
       },
       indexUpList(state, element) {
       state.index = state.array.name.indexOf(element)
   
       }
     },

  });
