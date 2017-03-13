import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'
// import createLogger from '../../../src/plugins/logger'

const state = {
  currentThreadID: null,
  threads: {
    /*
    id: {
      id,
      name,
      messages: [...ids],
      lastMessage
    }
    */
  },
  messages: {
    /*
    id: {
      id,
      threadId,
      threadName,
      authorName,
      text,
      timestamp,
      isRead
    }
    */
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
