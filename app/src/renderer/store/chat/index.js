import moment from 'moment'

import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

const defaultThreads = {
  general: {
    id: 'general',
    name: '#general',
    messages: [],
    lastMessage: moment()
  }
}

const state = {
  currentThreadID: 'general', // always start in general thread
  threads: {
    ...defaultThreads
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
