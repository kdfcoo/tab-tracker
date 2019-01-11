<template>
  <div class="white elevation-2">
    <v-toolbar
      class="mr-4 rootbtn"
      color="cyan"
      flat
      dense
      dark
    >
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <slot name="action"></slot>
    </v-toolbar>
    <div class="pl-4 pr-4 pt-2 pb-2">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style scoped>
</style>
