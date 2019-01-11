<template>
  <v-toolbar dark fixed color="cyan">
    <v-toolbar-title class="mr-4 rootbtn" @click="navigateTo('root')">
      TabTracker
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn dark flat @click="navigateTo('songs')">
        Brose
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items v-if="!$store.state.isUserLoggedIn">
      <v-btn dark flat @click="navigateTo('login')">
        Login
      </v-btn>
      <v-btn dark flat @click="navigateTo('register')">
        Sign Up
      </v-btn>
    </v-toolbar-items>
    <v-toolbar-items v-else>
      <v-btn dark flat @click="logout()">
        Logout
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (routername) {
      this.$router.push({name: routername})
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
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
