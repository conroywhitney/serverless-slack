import sinon from 'sinon'
import Vue from 'vue'
import Vuex from 'vuex'

import MessageSection from 'renderer/components/chat/MessageSection'

Vue.use(Vuex)

describe('MessageSection.vue', () => {
  let testStore = null
  let component = null

  const createEvent = text => ({ target: { value: text } })

  beforeEach(() => {
    testStore = new Vuex.Store({
      dispatch: sinon.spy(),
      store: {
        getters: {
          currentThread: () => 'CURRENT THREAD'
        }
      }
    })

    component = new (Vue.extend({ ...MessageSection, store: testStore }))()
    component.$mount()
  })

  describe('onSubmit', () => {
    xit('calls sendMessage event', () => {
      const text = 'TEST SEND MESSAGE'
      component.onSubmit(createEvent(text))

      expect(testStore.dispatch).to.have.been.calledWith('sendMessage', {
        text,
        thread: 'CURRENT THREAD'
      })
    })
  })
})
