<template>
  <main>
    <sd-header />
    <sd-assets-table />
  </main>
</template>

<script>
import SdHeader from "@/components/SdHeader.vue"

import SdAssetsTable from './components/SdAssetsTable.vue'

export default {
  name: 'App',
  components: {
    SdHeader,
    SdAssetsTable
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
