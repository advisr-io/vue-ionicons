<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="ios-tv-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M451.7 78H60.3C34.8 78 14 98.8 14 124.3v215.5c0 25.5 20.8 46.3 46.3 46.3h391.5c25.5 0 46.3-20.8 46.3-46.3V124.3C498 98.8 477.2 78 451.7 78zM470 339.7c0 10.1-8.2 18.3-18.3 18.3H60.3c-10.1 0-18.3-8.2-18.3-18.3V124.3c0-10.1 8.2-18.3 18.3-18.3h391.5c10.1 0 18.3 8.2 18.3 18.3v215.4z"/><path d="M436 128H76c-6.6 0-12 5.4-12 12v184c0 6.6 5.4 12 12 12h360c6.6 0 12-5.4 12-12V140c0-6.6-5.4-12-12-12zm-66 278H142c-7.7 0-14 6.3-14 14s6.3 14 14 14h228c7.7 0 14-6.3 14-14s-6.3-14-14-14z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="ios-tv-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M451.7 78H60.3C34.8 78 14 98.8 14 124.3v215.5c0 25.5 20.8 46.3 46.3 46.3h391.5c25.5 0 46.3-20.8 46.3-46.3V124.3C498 98.8 477.2 78 451.7 78zM470 339.7c0 10.1-8.2 18.3-18.3 18.3H60.3c-10.1 0-18.3-8.2-18.3-18.3V124.3c0-10.1 8.2-18.3 18.3-18.3h391.5c10.1 0 18.3 8.2 18.3 18.3v215.4z"/><path d="M436 128H76c-6.6 0-12 5.4-12 12v184c0 6.6 5.4 12 12 12h360c6.6 0 12-5.4 12-12V140c0-6.6-5.4-12-12-12zm-66 278H142c-7.7 0-14 6.3-14 14s6.3 14 14 14h228c7.7 0 14-6.3 14-14s-6.3-14-14-14z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "ios-tv-icon",
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

