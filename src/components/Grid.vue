<template>
  <transition-group class="grid" name="letters" tag="div">
    <span v-for="(letter) in app" :key="letter">{{letter}}</span>
  </transition-group>
</template>

<script>

import Config from '@/config'
import _ from 'lodash'

export default {
  data () {
    return {
      app: Config.app
    }
  },
  created () {
    setInterval(() => { 
      this.app = _.shuffle(this.app)
    }, 7000)
  }
}
</script>

<style lang="stylus">
.grid
  top 0
  position absolute
  display grid
  width 100%
  height 100%
  grid-template-columns repeat(3, auto)
  grid-template-rows repeat(3, auto)
  justify-items: center
  justify-content space-evenly
  align-content center
  mix-blend-mode lighten
  background-color white
  span
    font-family 'BluuNextBold' 
    font-size calc(100vmin / 3)
    line-height 30vmin
    mix-blend-mode: darken

.letters-move
  transition transform 2s
</style>
