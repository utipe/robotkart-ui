<template>
  <div id="app">
    <DashboardUI v-if="settings == true"/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import DashboardUI from './components/DashboardUI.vue'
export default {
  name: 'App',
  components: {
    DashboardUI
  },
  data() {
      return {
          settings: false
      }
  },
  mounted() {
    console.log("I am in mounted!!!")
    this.settings = true
  },
  setup () {
    console.log("I am in setup!!!")
  }
}
</script>

<style>
  @import './assets/styles/global.css';
</style>
