<script setup>
import { RouterView } from 'vue-router';
import logoo from './assets/favicon.png';
import Cabecalho from './components/Cabecalho.vue';
</script>

<template>
  
<Cabecalho :logo="logoo"/>
  <RouterView />
</template>

<style scoped>


</style>
