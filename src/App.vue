<template>
  <main>
    <sd-header />
    <!-- <sd-assets-table /> -->
    <router-view class="container px-5 sm: px-20 flex justify-center" />
  </main>
</template>

<script>
import SdHeader from "@/components/SdHeader.vue"

//import SdAssetsTable from './components/SdAssetsTable.vue' la sd-assets-table se traslado a view/Home.vue

export default {
  name: 'App',
  components: {
    SdHeader,
    //SdAssetsTable
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
