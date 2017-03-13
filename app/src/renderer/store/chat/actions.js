import { createMessage, fetchAllMessages } from '../../api'
import * as types from './mutation-types'

export const prefetchMessages = ({ commit }) => {
  fetchAllMessages(messages => {
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
