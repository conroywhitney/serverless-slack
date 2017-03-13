import * as types from './mutation-types'

import IoT from '../../aws/iot'
import { IOT_TOPIC } from '../../constants/iot'

export const iotClosed = ({ commit }) => commit(types.IOT_CLOSED)

export async function iotConnect ({ commit, dispatch }, payload) {
  commit(types.IOT_CONNECT)

  const keysUrl = `${process.env.AWS_IOT_ENDPOINT}/iot/keys`
  const response = await fetch(keysUrl)
  const credentials = await response.json()
  const handlers = {
    onClose: () => dispatch('iotClosed'),
    onConnect: () => dispatch('iotConnected'),
    onMessage: buffer => dispatch('iotMessage', JSON.parse(buffer.toString()))
  }

  IoT.connect({ credentials, topic: IOT_TOPIC, handlers })
}

export const iotConnected = ({ commit }) => commit(types.IOT_CONNECTED)

export const iotDisconnect = () => IoT.disconnect()

export const iotMessage = ({ dispatch }, { message }) =>
  dispatch('receiveMessage', { message })

export function iotSend ({ commit }, { message }) {
  IoT.send(JSON.stringify({ message }))
}
