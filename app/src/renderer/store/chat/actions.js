import { createMessage } from '../../api'
import * as types from './mutation-types'

import messageApi from '../../graphql/messages'

export async function fetchAllMessages ({ dispatch }) {
  const messages = await messageApi.fetchAll()

  dispatch('receiveAllMessages', { messages })
}

export const receiveAllMessages = ({ commit }, { messages }) => {
  commit(types.RECEIVE_ALL_MESSAGES, { messages })
}

export const sendMessage = ({ commit, dispatch }, { text, thread }) =>
  dispatch('iotSend', { message: createMessage({ text, thread }) })

export const receiveMessage = ({ commit }, { message }) => {
  commit(types.RECEIVE_MESSAGE, { message })
}

export const switchThread = ({ commit }, payload) => {
  commit(types.SWITCH_THREAD, payload)
}
