<script>
import ThreadSection from './ThreadSection.vue'
import MessageSection from './MessageSection.vue'

export default {
  name: 'Chat',
  components: {
    ThreadSection,
    MessageSection
  },
  mounted: function () {
    this.$store.dispatch('iotConnect')
    this.$store.dispatch('fetchAllMessages')
  },
  destroyed: function () {
    this.$store.dispatch('iotDisconnect')
  }
}
</script>

<style src="./styles.css"></style>

<template>
  <div class="chatapp">
    <thread-section></thread-section>
    <message-section></message-section>
  </div>
</template>
