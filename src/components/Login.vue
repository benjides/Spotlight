<template>
  <div class="login">
    <p>
      Visualize your Spotify playlists in a not so fancy way.
    </p>
    <div class="flex">
      <a :href="auth" class="button">
        Sign In with Spotify
      </a>
    </div>
  </div>
</template>


<script>

import { auth } from '@/api'

export default {
  computed: {
    auth () {
      return auth()
    }
  }
}

</script>
<style lang="stylus">
p
  font-size 75px
.flex
  display flex
  justify-content center
.button
  padding 10px 20px
  color white
  background-color #00E676
  text-decoration none
  border-radius 50px
  text-transform uppercase
  font-family Roboto Condensed
  font-weight 900
  font-style italic

/* Mobile */
@media all and (max-width 500px)
  p
    font-size 50px
</style>
