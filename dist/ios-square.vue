<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="ios-square-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M388 416H124c-15.4 0-28-12.6-28-28V124c0-15.4 12.6-28 28-28h264c15.4 0 28 12.6 28 28v264c0 15.4-12.6 28-28 28z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="ios-square-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M388 416H124c-15.4 0-28-12.6-28-28V124c0-15.4 12.6-28 28-28h264c15.4 0 28 12.6 28 28v264c0 15.4-12.6 28-28 28z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "ios-square-icon",
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

