<template>
  <div class="upList" @click="update_upList(name)">
    <a v-for="element in upList" :key="element.name" >
    {{element.name}}
    <span v-if="upList.length > 1"> > </span>
    </a>
  
  </div>
</template>

<script>

// import { mapState, mapMutations} from 'vuex'
import store from '../../store/index.js'


export default {
    store,
    props: ['titulo'],
    index: 0,
    upList: [{name: 'Preguntas Frecuentes'}],


   mutations:
   { 
    update_upList (state, element) {
        
    state.upList.push({name: element}) 

    },
    indexUpList(state, element) {
    state.index = state.array.name.indexOf(element)

    }
  },
}
</script>