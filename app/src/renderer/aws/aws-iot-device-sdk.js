export default (process.env.NODE_ENV === 'testing')
  ? require('../../../../test/mocks/aws-iot-device-sdk')
  : require('aws-iot-device-sdk')
