import sinon from 'sinon'
import Vue from 'vue'

import Chat from 'renderer/components/chat/Chat'

describe('Chat.vue', () => {
  let testStore = null
  let component = null

  beforeEach(() => {
    testStore = {
      dispatch: sinon.spy()
    }

    component = new (Vue.extend({ ...Chat, store: testStore }))()
  })

  it('connects to IoT when mounted', () => {
    component.$mount()

    expect(testStore.dispatch).to.have.been.calledWith('iotConnect')
  })

  it('disconnects from IoT when destroyed', () => {
    component.$destroy()

    expect(testStore.dispatch).to.have.been.calledWith('iotDisconnect')
  })
})
