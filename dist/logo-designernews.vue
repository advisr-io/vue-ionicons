<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="logo-designernews-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M290.4 145L227 96l63.6 102.2z"/><path d="M329 96v163h-36.4l-63.2-98.6 1.7 98.6H191V152l-37.3-29.3c1 1.2 2 2.4 2.9 3.7 10 13.9 15 30.5 15 50.5 0 49.2-30.6 82.1-76.9 82.1H32v.4L231.6 416H480V214.1L329 96z"/><path d="M129.9 178.1c0-29-14.2-45.1-39.7-45.1H71v89h19c26 0 39.9-15.4 39.9-43.9z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="logo-designernews-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M290.4 145L227 96l63.6 102.2z"/><path d="M329 96v163h-36.4l-63.2-98.6 1.7 98.6H191V152l-37.3-29.3c1 1.2 2 2.4 2.9 3.7 10 13.9 15 30.5 15 50.5 0 49.2-30.6 82.1-76.9 82.1H32v.4L231.6 416H480V214.1L329 96z"/><path d="M129.9 178.1c0-29-14.2-45.1-39.7-45.1H71v89h19c26 0 39.9-15.4 39.9-43.9z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "logo-designernews-icon",
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

