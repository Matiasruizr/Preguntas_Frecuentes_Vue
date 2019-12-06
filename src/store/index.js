import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      count: 0,
      position: 0,
      upList: [{name: 'Preguntas Frecuentes', id: 0, id_padre: 0}],
    },
      

    mutations:
     {
      increment (state, element) {
        // mutate state
        
        state.count = element
      },

       update_upList (state, element) {
        
        state.upList.push({name: element.name, id: element.id, id_padre: element.id_padre})  
       },
       clickUpList(state, element) {
       state.position = state.upList.indexOf(element),
       state.upList.splice(state.position+1)
       state.count = element.id
        
       },
     },

  });
