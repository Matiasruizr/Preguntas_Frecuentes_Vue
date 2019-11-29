<template>
<div class="upList">
  {{upList}}{{count}}
  <div  v-for="element in upList" :key="element.name">
    <a>aaa  
    {{element.name}}
    <span v-if="upList.length > 1"> > </span>
    </a>
  </div>
  </div>
</template>

<script>

import  {mapState, mapMutations } from 'vuex'
// import store from '../../store/index.js'


export default {
    // store,
    // index: 0,
    // upList: [{name: 'Preguntas Frecuentes'}],
    data () {
        return {

        }
    
    },
    methods: {
     ...mapMutations(['increment', 'update_upList', 'indexUpList']),

  },
  computed: {

    ...mapState(['count', 'upList']), 

  }

}
</script>