<template>
<div class="upList">

<span v-for="element in upList" :key="element.name"><a @click="clickUpList(element)">{{element.name}}<span v-if="upList.length > 1 && upList.indexOf(element) != upList.length -1" > > </span></a> 

  </span>
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
     ...mapMutations(['increment', 'update_upList', 'clickUpList']),

  },
  computed: {

    ...mapState(['count', 'upList']), 

  }

}
</script>