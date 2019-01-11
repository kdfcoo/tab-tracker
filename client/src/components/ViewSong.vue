<template>
  <v-container grid-list-sm>
    <v-layout>
      <v-flex xs6>
        <panel title="Song Metadata">
          <v-layout
            row
            wrap
          >
            <v-flex xs6>
              <div class="song-title">{{song.title}}</div>
              <div class="song-artist">{{song.artist}}</div>
              <div class="song-genre">{{song.genre}}</div>
            </v-flex>
            <v-flex xs6>
              <v-img :src="song.albumImageUrl"></v-img>
              <div>{{song.album}}</div>
            </v-flex>
          </v-layout>
        </panel>
      </v-flex>
      <v-flex xs6>
        <panel title="Tabs"></panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SongsService from '../services/SongsService'
import Panel from './Panel'

export default {
  components: {
    Panel
  },
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  }
}
</script>

<style scoped>
</style>
