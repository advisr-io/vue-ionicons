<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="ios-medkit-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M432 128h-84V96c0-17.6-14.4-32-32-32H196c-17.6 0-32 14.4-32 32v32H80c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32h352c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32zm-240-28c0-4.4 3.6-8 8-8h112c4.4 0 8 3.6 8 8v28H192v-28zm128 204h-48v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16h48v-48c0-8.8 7.2-16 16-16s16 7.2 16 16v48h48c8.8 0 16 7.2 16 16s-7.2 16-16 16z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="ios-medkit-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M432 128h-84V96c0-17.6-14.4-32-32-32H196c-17.6 0-32 14.4-32 32v32H80c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32h352c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32zm-240-28c0-4.4 3.6-8 8-8h112c4.4 0 8 3.6 8 8v28H192v-28zm128 204h-48v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16h48v-48c0-8.8 7.2-16 16-16s16 7.2 16 16v48h48c8.8 0 16 7.2 16 16s-7.2 16-16 16z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "ios-medkit-icon",
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

