<template>
  <div class="topBar"><h1>{{titulo}}</h1></div>
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
</style>