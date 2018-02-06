<template>
  <div id="app">
    <cover></cover>
    <grid></grid>
    <div class="container">
      <app-header></app-header>
      <transition name="component-fade" mode="out-in">
        <component :is="component" :playlists="playlists"></component>
      </transition>
    </div>
  </div>
</template>

<script>

import { getHashParams } from '@/functions'
import { me, getPlaylists } from '@/api'

import Header from '@/components/Header'
import Cover from '@/components/Cover'
import Grid from '@/components/Grid'
import Login from '@/components/Login'
import Spotlight from '@/components/Spotlight'
import Loading from '@/components/Loading'


export default {
  name: 'app',
  components: {
    'app-header': Header,
    Cover,
    Grid,
    Login,
    Spotlight,
    Loading
  },
  data () {
    return {
      component: 'login',
      accessToken: null,
      id: null,
      playlists: []
    }
  },
  created () {
    let accessToken = getHashParams().access_token
    if (!accessToken) {
      return
    }
    window.location.hash = ''
    this.accessToken = accessToken
    this.init()
  },
  methods: {
    init: function () {
      this.component = 'loading'
      me(this.accessToken).then(res => {
        this.id = res.data.id
      }).then(() => {
        return getPlaylists(this.accessToken)
      }).then(res => {
        this.playlists = res.data.items.filter(playlist => playlist.owner.id === this.id)
      }).then(() => this.component = 'spotlight')
    }
  }
}
</script>

<style lang="stylus">
*
  box-sizing border-box

body,
html
  font-family 'Roboto Condensed', sans-serif
  margin 0
  overflow-x hidden
  height 100%
  width 100%

.container
  width 60%
  margin 0 auto
  position relative

.component-fade-enter-active, .component-fade-leave-active
  transition opacity .3s ease

.component-fade-enter, .component-fade-leave-to
  opacity 0

/* Mobile */
@media all and (max-width 500px)
  .container
    width 80%
</style>

