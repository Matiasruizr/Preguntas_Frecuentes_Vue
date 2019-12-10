<template>
  <div id="app">
    <topBar titulo="Preguntas Frecuentes"/>
<template>

    <upList/>
    </template>
    <template>
      <div v-for="category in categories_json" :key="category.id">
        <categories v-show="category.id_padre == count"
        :name="category.name"
        :descripcion="category.descripcion"
        :id="category.id"
        :id_padre="category.id_padre"
        :lastElem="category.lastElem"
        :link="category.link"
        />
      </div>
    </template>
    <div id="app">
    <template>
    <h3><a>Otras Consultas</a></h3>
    <h4>Mail</h4>
    <div>
    <input v-model="todos.mail" placeholder="Dejanos tu mail">{{todos.mail}}<br>
    </div>
    <h3>Consulta</h3>
    <p>{{ todos.contenido }}</p>
    <textarea type="text" v-model="todos.contenido" placeholder="Escribe Aqui tu consulta"></textarea><br>
    </template>

    <button @click="sendMail(todos.contenido, todos.mail, upList), resetForm()">Enviar</button>
  </div>
  </div>
</template>


<script>
import topBar from './components/Externos/topBar.vue'
import upList from './components/Externos/upList.vue'
import json from './components/Data/categories.json'
import categories from './components/Data/categories.vue'
import  {mapState, mapMutations } from 'vuex'
import store from './store/index.js'
import axios from 'axios'

export default {
  store,
  name: 'app',
  components: {
    topBar,
    categories,
    upList,

  },
  data() {
    return{
      // active_category: 3,
      categories_json: json.categories,
      todos: [
      { contenido: "Contenido", mail:"Escribe Aqui tu consulta" },
    ],
    }
  },
  methods: {

    ...mapMutations(['increment','indexUpList', 'clickUpList']),
    sendMail(contenido, mail, upList) {
      const options = {
        method: 'post',
        url: 'https://cors-anywhere.herokuapp.com/https://api.sendgrid.com/v3/mail/send',
        data: {
              personalizations: [
                {
                  to: [
                    {
                      email: 'jmmontes@notorious.cl',
                    },
                  ],
                  subject: 'Nueva consulta en Preguntas Frecuentes',
                },
              ],
              from: {
                email: mail,
              },
              content: [
                {
                  type: 'text/plain',
                  value: 'Nueva consulta en Preguntas Frecuentes \n ' + contenido + '\nEn la Categoria: '+ JSON.stringify(upList),
                },
              ],
        }, 
        headers: 
                  {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer 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',
                    'Access-Control-Allow-Methods': 'POST, OPTIONS',
                    'Access-Control-Allow-Headers': 'X-Requested-With, Origin,  Content-Type, Accept',
                  },
      
              
      };
      axios(options);

          // .then((response) => {
          //   alert(response);
          // }, (error) => {
          //   alert(error);
          // });
    },
      resetForm() {
        var self = this; //you need this because *this* will refer to Object.keys below`
        //Iterate through each object field, key is name of the object field`
        self.todos.contenido = '',
        self.todos.mail = ''
    }
  },
  computed: {
    ...mapState(['count', 'upList'])
  },

  
}


</script>

<style>
/* Global Styles */

* {
  font-family: 'Roboto', Arial, sans-serif;
  color: #000000;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
}

.container {
  display: flex;
  flex-direction: row;
}

router-outlet + *  {
  padding: 0 16px;
}

/* Text */

h1 {
  font-size: 32px;
}

h2 {
  font-size: 20px;
}

h1, h2 {
  font-weight: lighter;
}

p {
  font-size: 14px;
}

/* Hyperlink */

a {
  cursor: pointer;
  color: #31002f;
  text-decoration: none;
}

a:hover {
  opacity: 0.8;
}

/* Input */

input {
  font-size: 14px;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #BDBDBD;
}

label {
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 4px;
  display: block;
  text-transform: uppercase;
}


/* Button */
.button, button {
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: 2px;
  font-size: 14px;
  cursor: pointer;
  background-color: #8D8D8D;
  color: white;
  border: none;
}

.button:hover, button:hover {
  opacity: 0.8;
  font-weight: normal;
}

.button:disabled, button:disabled {
  opacity: 0.5;
  cursor: auto;
}

/* Fancy Button */

.fancy-button {
  background-color: white;
  color: #000000;
  align-items: right;
}

.fancy-button i.material-icons {
  color: #1976d2;
  padding-right: 4px;
}

.button2 {
  display: inline-flex;
  align-items: right;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  background-color: white;
  color: #3b0742;
  border: none;
}

/* Top Bar */

app-top-bar {
  width: 100%;
  height: 68px;
  background-color: #3b0742;
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

app-top-bar h1 {
  color: white;
  margin: 0;
}

/* Checkout Cart, Shipping Prices */

.cart-item, .shipping-item {
  width: 100%;
  min-width: 400px;
  max-width: 450px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 32px;
  margin-bottom: 8px;
  border-radius: 2px;
  background-color: #EEEEEE;
}

</style>