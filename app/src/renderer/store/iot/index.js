import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

import { IOT_STATUS } from '../../constants/iot'

const state = {
  status: IOT_STATUS.disconnected
}

export default {
  state,
  getters,
  actions,
  mutations
}
