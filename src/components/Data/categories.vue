<template>
    <div id="cat" :key="active_category">
        <h1>{{active_category}}</h1>
        <h3><a v-on:click="clickCategory(id)" >{{name}}</a></h3>
        <p>{{descripcion}}</p>
        <a v-if="link">{{link}}</a>
    </div>
</template>

<script>


export default {
    name: 'cat',
    props: ['name', 'descripcion', 'id', 'id_padre', 'lastElem', 'link'],

  data() {
    return{
      active_category: null,
    }
  },
  methods: {
       clickCategory: function (element) {         
         this.active_category = element;
         
    }
  },
}

</script>