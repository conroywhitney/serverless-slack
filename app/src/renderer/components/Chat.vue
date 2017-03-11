<style src="../css/chat.css"></style>

<template>
  <div class="chatapp">
    <thread-section></thread-section>
    <message-section></message-section>
  </div>
</template>

<script>
import ThreadSection from './Chat/ThreadSection.vue'
import MessageSection from './Chat/MessageSection.vue'

export default {
  name: 'Chat',
  components: {
    ThreadSection,
    MessageSection
  }
}
</script>
