<template>
<div class="spotlight">
    <div v-for="playlist in playlists" :key="playlist.id" class="playlist">
        <a :href="playlist.external_urls.spotify" target="_blank">
            <img :src="playlist.images[0].url" :alt="playlist.name">
        </a>
    </div>
</div>
</template>

<script>
export default {
  props: ['playlists']
}
</script>

<style lang="stylus">
.spotlight
    display flex
    flex-wrap wrap
    .playlist
        width calc(100% / 3)
        padding 5px
        img
            width 100%

/* Mobile */
@media all and (max-width 500px)
    .spotlight
        .playlist
            width 50%
</style>