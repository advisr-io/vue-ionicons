<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="md-card-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M435.2 80H76.8c-24.9 0-44.6 19.6-44.6 44L32 388c0 24.4 19.9 44 44.8 44h358.4c24.9 0 44.8-19.6 44.8-44V124c0-24.4-19.9-44-44.8-44zm0 308H76.8V256h358.4v132zm0-220H76.8v-44h358.4v44z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="md-card-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M435.2 80H76.8c-24.9 0-44.6 19.6-44.6 44L32 388c0 24.4 19.9 44 44.8 44h358.4c24.9 0 44.8-19.6 44.8-44V124c0-24.4-19.9-44-44.8-44zm0 308H76.8V256h358.4v132zm0-220H76.8v-44h358.4v44z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-card-icon",
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

