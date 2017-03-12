export default {
  device () {
    console.log('mock', 'aws-iot-device-sdk', 'device')

    return {
      onClose: null,
      onConnect: null,
      onMessage: null,

      end () {
        console.log('mock', 'aws-iot-device-sdk', 'device', 'end')

        this.onClose()
      },
      on (event, cb) {
        console.log('mock', 'aws-iot-device-sdk', 'device', 'on', event)

        if (event === 'close') this.onClose = cb
        if (event === 'connect') this.onConnect = cb
        if (event === 'message') this.onMessage = cb
      },
      publish (message) {
        console.log('mock', 'aws-iot-device-sdk', 'device', 'publish', message)

        this.onMessage(message)
      },
      subscribe () {
        console.log('mock', 'aws-iot-device-sdk', 'device', 'subscribe')
      }
    }
  }
}
