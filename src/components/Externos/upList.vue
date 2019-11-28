<template>
  <div class="upList" @click="update_upList(name)">
    <a>
    {{element.name}}
    <span v-if="upList.length > 1"> > </span>
    </a>
  
  </div>
</template>

<script>

import  {mapState, mapMutations } from 'vuex'
// import store from '../../store/index.js'


export default {
    // store,
    props: ['name', 'link'],
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