<template>
  <div class="topBar"><h1>{{titulo}}</h1><a href="https://www.notoriousgrow.com"><img src="http://notorious.cl/promocion/logo%20nuevo%20chico.png" /></a></div>
</template>

<script>
export default {
    props: ['titulo']
}
</script>

<style lang="css" scoped>
.topBar {
  width: 100%;
  height: 68px;
  background-color: #3b0742;
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
}
h1 {
    color: white;
}

img {
  /* display: block; */
  /* margin-left: auto;
  margin-right: auto; */
  margin-top: auto;
}
a {
  margin-top: auto;
}
</style>