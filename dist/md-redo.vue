<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="md-redo-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M32 337.2L83.8 352c22.9-69.7 88.7-117.8 166-117.8 42.8 0 81.5 15.7 111.8 41.1L282.5 352H480V160l-79.6 76.3c-40.4-35.2-92.8-56.8-150.7-56.8-101.5.1-187.3 66.2-217.7 157.7z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="md-redo-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M32 337.2L83.8 352c22.9-69.7 88.7-117.8 166-117.8 42.8 0 81.5 15.7 111.8 41.1L282.5 352H480V160l-79.6 76.3c-40.4-35.2-92.8-56.8-150.7-56.8-101.5.1-187.3 66.2-217.7 157.7z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-redo-icon",
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

