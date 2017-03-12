import Vue from 'vue'
import Vuex from 'vuex'

import chat from './chat'
import iot from './iot'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    chat: chat,
    iot: iot
  },
  plugins: process.env.NODE_ENV !== 'production'
    ? []
    : []
})
