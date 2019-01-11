<template>
  <div>
    <v-container>
      <v-layout
        row
        wrap
      >
        <v-flex
          xs6
          offset-xs3
        >
          <panel title="Login">
            <v-text-field
              name="email"
              label="email"
              id="email"
              v-model="email"
            ></v-text-field>
            <br>
            <v-text-field
              name="password"
              label="password"
              type="password"
              id="password"
              v-model="password"
            ></v-text-field>
            <br>
            <div
              v-if="error"
              class="error"
            >{{error}}</div>
            <br>
            <v-btn
              class="cyan"
              dark
              @click="login()"
            >Login</v-btn>
          </panel>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'
import Panel from './Panel'

export default {
  components: {
    Panel
  },
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
