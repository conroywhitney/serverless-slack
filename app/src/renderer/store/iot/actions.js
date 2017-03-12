import * as types from './mutation-types'

export const iotConnect = ({ commit }, payload) => {
  commit(types.IOT_CONNECT)
}

export const iotDisconnect = ({ commit }, payload) => {
  commit(types.IOT_DISCONNECT)
}
