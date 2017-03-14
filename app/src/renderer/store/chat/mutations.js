import Vue from 'vue'
import * as types from './mutation-types'

export default {
  [types.RECEIVE_ALL_MESSAGES] (state, { messages }) {
    let latestMessage
    messages.forEach(message => {
      // create new thread if the thread doesn't exist
      if (!state.threads[message.threadID]) {
        createThread(state, message.threadID, message.threadName)
      }
      // mark the latest message
      if (!latestMessage || message.timestamp > latestMessage.timestamp) {
        latestMessage = message
      }
      // add message
      addMessage(state, message)
    })
    // set initial thread to the one with the latest message
    if (latestMessage) setCurrentThread(state, latestMessage.threadID)
  },

  [types.RECEIVE_MESSAGE] (state, { message }) {
    addMessage(state, message)
  },

  [types.SWITCH_THREAD] (state, { id }) {
    setCurrentThread(state, id)
  }
}

function createThread (state, id, name) {
  Vue.set(state.threads, id, {
    id,
    name,
    messages: [],
    lastMessage: null
  })
}

function addMessage (state, message) {
  // add a `isRead` field before adding the message
  const newMessage = {
    ...message,
    isRead: message.threadID === state.currentThreadID
  }

  // add it to the thread it belongs to
  const thread = state.threads[newMessage.threadID]
  if (!thread.messages.some(id => id === newMessage.id)) {
    thread.messages.push(newMessage.id)
    thread.lastMessage = newMessage
  }
  // add it to the messages map
  Vue.set(state.messages, newMessage.id, newMessage)
}

function setCurrentThread (state, id) {
  state.currentThreadID = id
  // mark thread as read
  state.threads[id].lastMessage.isRead = true
}
