<template>
  <v-toolbar dark fixed color="cyan">
    <v-toolbar-title class="mr-4 rootbtn" @click="home()">
      TabTracker
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn dark flat>Brose</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn dark flat @click="register()">
        Sign Up
        <!-- <router-link to="register">Sign Up</router-link> -->
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    register () {
      this.$router.push({name: 'register'})
    },
    home () {
      this.$router.push({name: 'root'})
    }
  }
}
</script>

<style scoped>
.rootbtn{
  cursor: pointer;
}
</style>
