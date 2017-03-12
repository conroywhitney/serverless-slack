import * as types from './mutation-types'

import { IOT_STATUS } from './constants'
import logger from '../../utils/logger'

export default {
  [types.IOT_CLOSED] (state) {
    updateStatus(state, IOT_STATUS.disconnected)
  },

  [types.IOT_CONNECT] (state) {
    updateStatus(state, IOT_STATUS.connecting)
  },

  [types.IOT_CONNECTED] (state) {
    updateStatus(state, IOT_STATUS.connected)
  },

  [types.IOT_DISCONNECT] (state) {
    updateStatus(state, IOT_STATUS.disconnecting)
  }
}

function updateStatus (state, status) {
  logger('updateStatus', 'status', status)

  state.status = status
}
