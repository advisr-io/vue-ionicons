<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="md-jet-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M480 32s-23.4-.7-59.3 27.1C404 72 244.9 186.8 244.9 186.8l-168.8-4.2L32 222l109.8 55.2-8.6 10.8-87.9.1-7.2 40.5 63.1 48.7-26.6 59.8 60-26.4 48.7 63.1 40.5-7.2.1-87.8 10.9-8.5L290.1 480l39.3-44.1-4.2-168.7S440.1 108.2 453 91.6C480.7 55.5 480 32 480 32z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="md-jet-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M480 32s-23.4-.7-59.3 27.1C404 72 244.9 186.8 244.9 186.8l-168.8-4.2L32 222l109.8 55.2-8.6 10.8-87.9.1-7.2 40.5 63.1 48.7-26.6 59.8 60-26.4 48.7 63.1 40.5-7.2.1-87.8 10.9-8.5L290.1 480l39.3-44.1-4.2-168.7S440.1 108.2 453 91.6C480.7 55.5 480 32 480 32z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-jet-icon",
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

