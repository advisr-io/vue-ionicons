<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="md-nutrition-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M357.2 235.6L274.7 153h-.8c-8.1-6-18.2-10.3-28.4-10.3-13.7 0-26.1 6.3-34.3 16.3h-.6L53 414.1v.8c-3 6.2-5 13.3-5 20.8 0 24.4 19.7 44.3 44.3 44.3 9.4 0 18-2.9 27.4-9.1l232.9-168.1c10.9-8.3 17.4-21.6 17.4-36 0-12-4.7-23.2-12.8-31.2zM464 145.1l-29.2-49-36.6 20.3 31.5-55.9L380.6 32l-67.3 127.8 41.3 41.4z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="md-nutrition-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M357.2 235.6L274.7 153h-.8c-8.1-6-18.2-10.3-28.4-10.3-13.7 0-26.1 6.3-34.3 16.3h-.6L53 414.1v.8c-3 6.2-5 13.3-5 20.8 0 24.4 19.7 44.3 44.3 44.3 9.4 0 18-2.9 27.4-9.1l232.9-168.1c10.9-8.3 17.4-21.6 17.4-36 0-12-4.7-23.2-12.8-31.2zM464 145.1l-29.2-49-36.6 20.3 31.5-55.9L380.6 32l-67.3 127.8 41.3 41.4z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-nutrition-icon",
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

