<template>
<div class="spinner-wrapper">
  <svg class="spinner" width="44px" height="44px" viewBox="0 0 44 44">
    <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="22" cy="22" r="20"></circle>
  </svg>
</div>
</template>

<style lang="stylus">

$offset = 126
$duration = 1.4s

.spinner-wrapper
  display flex
  align-items center
  justify-content center

  .spinner
    z-index 999
    opacity 1
    transition opacity .15s ease
    animation rotator $duration linear infinite
    animation-play-state running

@keyframes rotator
  0%
    transform scale(0.5) rotate(0deg)
  100%
    transform scale(0.5) rotate(270deg)

.spinner .path
  stroke #00E676
  stroke-dasharray $offset
  stroke-dashoffset 0
  transform-origin center
  animation dash $duration ease-in-out infinite

@keyframes dash
  0%
    stroke-dashoffset $offset
  50%
    stroke-dashoffset ($offset/2)
    transform rotate(135deg)
  100%
    stroke-dashoffset $offset
    transform rotate(450deg)
</style>
