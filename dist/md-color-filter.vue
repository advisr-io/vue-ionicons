<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="md-color-filter-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M441.8 120.1l-49.9-49.9c-8.3-8.3-21.8-8.3-30.1 0l-66.6 66.6L254.1 96 224 126.1l30.3 30.3L64 346.7V448h101.3l190.3-190.3 30.3 30.3 30.1-30.1-41-41 66.6-66.6c8.5-8.4 8.5-21.8.2-30.2zM147.6 405.4l-41-41 171.9-171.9 41 41-171.9 171.9z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="md-color-filter-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M441.8 120.1l-49.9-49.9c-8.3-8.3-21.8-8.3-30.1 0l-66.6 66.6L254.1 96 224 126.1l30.3 30.3L64 346.7V448h101.3l190.3-190.3 30.3 30.3 30.1-30.1-41-41 66.6-66.6c8.5-8.4 8.5-21.8.2-30.2zM147.6 405.4l-41-41 171.9-171.9 41 41-171.9 171.9z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-color-filter-icon",
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

