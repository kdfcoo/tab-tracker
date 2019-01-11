<template>
  <div>
    <v-container grid-list-sm>
      <v-layout>
        <v-flex xs4>
          <panel title="Song Metadata">
            <v-text-field
              name="title"
              label="Title"
              id="title"
              :rules="[rules.required]"
              v-model="song.title"
            ></v-text-field>
            <v-text-field
              name="artist"
              label="Artist"
              id="artist"
              :rules="[rules.required]"
              v-model="song.artist"
            ></v-text-field>
            <v-text-field
              name="genre"
              label="Genre"
              id="genre"
              :rules="[rules.required]"
              v-model="song.genre"
            ></v-text-field>
            <v-text-field
              name="album"
              label="Album"
              id="album"
              :rules="[rules.required]"
              v-model="song.album"
            ></v-text-field>
            <v-text-field
              name="albumImageUrl"
              label="Album Image Url"
              id="albumImageUrl"
              :rules="[rules.required]"
              v-model="song.albumImageUrl"
            ></v-text-field>
            <v-text-field
              name="youtubeId"
              label="youtube Id"
              id="youtubeId"
              :rules="[rules.required]"
              v-model="song.youtubeId"
            ></v-text-field>
          </panel>
        </v-flex>
        <v-flex xs8>
          <panel title="Song Structure">
            <v-textarea
              name="tab"
              label="Tab"
              id="tab"
              :rules="[rules.required]"
              v-model="song.tab"
            ></v-textarea>
            <v-textarea
              name="lyrics"
              label="Lyrics"
              id="lyrics"
              :rules="[rules.required]"
              v-model="song.lyrics"
            ></v-textarea>
          </panel>
          <div class="error" v-if="error">{{error}}</div>
          <v-btn
            class="cyan"
            dark
            @click="create()"
          >Create</v-btn>
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
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: '',
      rules: {
        required: value => !!value || 'Required.'
      }
    }
  },
  methods: {
    async create () {
      this.error = ''
      const areAllFiledsFilledIn = Object.keys(this.song).every(key => !!this.song[key])
      if (areAllFiledsFilledIn === false) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      try {
        await SongsService.post(this.song)
        this.$router.push({ name: 'songs' })
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
