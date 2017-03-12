export default {
  device () {
    console.log('mock', 'aws-iot-device-sdk', 'device')

    return {
      end () {
        console.log('mock', 'aws-iot-device-sdk', 'device', 'end')
      },
      on (event, cb) {
        console.log('mock', 'aws-iot-device-sdk', 'device', 'on', event)
      },
      publish () {
        console.log('mock', 'aws-iot-device-sdk', 'device', 'publish')
      },
      subscribe () {
        console.log('mock', 'aws-iot-device-sdk', 'device', 'subscribe')
      }
    }
  }
}
