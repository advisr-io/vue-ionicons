<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="md-backspace-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M433.5 96H167.2c-12.2 0-21.8 6.2-28.2 15.6L43 256l96 144.2c6.4 9.4 16 15.8 28.2 15.8h266.2c19.5 0 35.5-16 35.5-35.6V131.6C469 112 453 96 433.5 96zm-53.3 223.8l-25 25.1-63.7-63.8-63.7 63.8-25-25.1 63.7-63.8-63.7-63.8 25-25.1 63.7 63.8 63.7-63.8 25 25.1-63.7 63.8 63.7 63.8z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="md-backspace-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M433.5 96H167.2c-12.2 0-21.8 6.2-28.2 15.6L43 256l96 144.2c6.4 9.4 16 15.8 28.2 15.8h266.2c19.5 0 35.5-16 35.5-35.6V131.6C469 112 453 96 433.5 96zm-53.3 223.8l-25 25.1-63.7-63.8-63.7 63.8-25-25.1 63.7-63.8-63.7-63.8 25-25.1 63.7 63.8 63.7-63.8 25 25.1-63.7 63.8 63.7 63.8z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-backspace-icon",
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

