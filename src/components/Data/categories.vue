<template>
    <div id="cat" >

        <h3><a v-if="lastElem == 0" @click="increment(id)">{{name}}</a>
        <a v-else>{{name}}</a></h3>
        <p>{{descripcion}}</p>
        <span v-if="link" ><a :href="link">{{link}}</a></span>

    </div>
</template>

<script>

import { mapState, mapMutations} from 'vuex'
import store from '../../store/index.js'



export default {
    store,
    name: 'cat',
    props: ['name', 'descripcion', 'id', 'id_padre', 'lastElem', 'link'],



  methods: {
     ...mapMutations(['increment']),

  },
  computed: {

    ...mapState(['count']), 

  }
}

</script>