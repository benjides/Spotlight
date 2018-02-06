<template>
  <header>
    <span class="diamonds">...</span>
    <span>{{app}}</span>
    <span class="diamonds">...</span>
  </header>
</template>

<script>
import Config from '@/config'
export default {
data () {
    return {
      app: Config.app
    }
  }
}
</script>


<style lang="stylus">
header 
  width 100%
  height 60px
  border-top 1px solid #000
  border-bottom 1px solid #000
  display flex
  justify-content center
  align-items center
  margin 25px 0
  span
    color #fff
    text-transform uppercase
    font-size 40px
    font-family 'BluuNextBold'
    mix-blend-mode difference
  .diamonds
    top -10px
    position relative
    letter-spacing -1px
    margin 15px
</style>
