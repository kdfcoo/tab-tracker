<template>
  <div id="app">
    <v-app>
      <page-header></page-header>
      <v-content>
        <router-view/>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import PageHeader from './components/Header'

export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
