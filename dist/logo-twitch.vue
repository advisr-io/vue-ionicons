<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="logo-twitch-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M80 32l-32 80v304h96v64h64l64-64h80l112-112V32H80zm336 256l-64 64h-96.001L192 416v-64h-80V80h304v208z"/><path d="M320 143h48v129h-48zm-112 0h48v129h-48z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="logo-twitch-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M80 32l-32 80v304h96v64h64l64-64h80l112-112V32H80zm336 256l-64 64h-96.001L192 416v-64h-80V80h304v208z"/><path d="M320 143h48v129h-48zm-112 0h48v129h-48z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "logo-twitch-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : null
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

