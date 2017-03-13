import * as api from '../../api'
import * as types from './mutation-types'

export const getAllMessages = ({ commit }) => {
  api.getAllMessages(messages => {
    commit(types.RECEIVE_ALL, {
      messages
    })
  })
}

export const sendMessage = ({ commit, dispatch }, { text, thread }) =>
  dispatch('iotSend', { message: createMessage({ text, thread }) })

export const receiveMessage = ({ commit }, { message }) => {
  commit(types.RECEIVE_MESSAGE, { message })
}

export const switchThread = ({ commit }, payload) => {
  commit(types.SWITCH_THREAD, payload)
}

function createMessage ({ text, thread }) {
  const timestamp = Date.now()
  const id = 'm_' + timestamp

  return {
    id,
    text,
    timestamp,
    threadID: thread.id,
    threadName: thread.name,
    authorName: 'Conroy'
  }
}
