<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="ios-fastforward-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M476.1 249.3L268 129.1c-5.4-3.1-12.3.6-12.3 6.7V251L44.3 129.1c-5.4-3.1-12.3.6-12.3 6.7v240.3c0 6.1 6.9 9.8 12.3 6.7L255.6 261v115.2c0 6.1 6.9 9.8 12.3 6.7L476 262.7c5.3-3 5.3-10.4.1-13.4z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="ios-fastforward-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M476.1 249.3L268 129.1c-5.4-3.1-12.3.6-12.3 6.7V251L44.3 129.1c-5.4-3.1-12.3.6-12.3 6.7v240.3c0 6.1 6.9 9.8 12.3 6.7L255.6 261v115.2c0 6.1 6.9 9.8 12.3 6.7L476 262.7c5.3-3 5.3-10.4.1-13.4z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "ios-fastforward-icon",
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

