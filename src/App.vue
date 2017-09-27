<template>
  <div id="app">
    <h1>{{msg}}</h1>  
    
    <Login />
  </div>
</template>

<script>
  import Login from './components/login/Login.vue';

  export default {
    name: 'app',

    components: {
       Login
    },

    data () {
      return {
        msg: 'Componente principal'
      }
    }
  }
</script>

<style>

</style>
