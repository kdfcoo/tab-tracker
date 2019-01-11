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
          <panel title="Songs">
            <v-btn
              icon
              slot="action"
              @click="createSong"
            >
              <v-icon>add</v-icon>
            </v-btn>
            <div
              v-for="song in songs"
              :key="song.id"
              class="song"
            >
              <v-layout
                row
                wrap
              >
                <v-flex xs6>
                  <div class="song-title">{{song.title}}</div>
                  <div class="song-artist">{{song.artist}}</div>
                  <div class="song-genre">{{song.genre}}</div>
                  <v-btn
                    class="cyan"
                    dark
                    @click="navitateTo(song.id)"
                  >View</v-btn>
                </v-flex>
                <v-flex xs6>
                  <v-img
                    :src="song.albumImageUrl"
                  ></v-img>
                </v-flex>
              </v-layout>
            </div>
          </panel>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
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
      songs: [
        // {
        //   id: 1,
        //   title: 'FLoat On',
        //   artist: 'Modest Mouse',
        //   album: 'Good News for People Who Love Bad News'
        // }
      ]
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  },
  methods: {
    createSong () {
      this.$router.push({ name: 'songs-create' })
    },
    navitateTo (songId) {
      this.$router.push({ name: 'song',
        params: {
          songId: songId
        } })
    }
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 24px;
}

.song-genre {
  font-size: 14px;
}
</style>
