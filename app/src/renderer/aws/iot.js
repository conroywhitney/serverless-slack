import awsIot from './aws-iot-device-sdk'
import logger from '../utils/logger'

const IoT = {
  client: null,
  iotTopic: null,
  connect: ({ credentials, handlers, topic }) => {
    const {
      iotEndpoint,
      region,
      awsAccessKey,
      awsSecretAccessKey,
      sessionToken
    } = credentials

    const { onClose, onConnect, onMessage } = handlers

    IoT.iotTopic = topic

    IoT.client = awsIot.device({
      accessKeyId: awsAccessKey,
      host: iotEndpoint,
      port: 443,
      protocol: 'wss',
      region,
      secretKey: awsSecretAccessKey,
      sessionToken
    })

    const handleClose = () => {
      logger('AWS IoT', 'handleClose')

      onClose()
    }

    const handleConnect = () => {
      logger('AWS IoT', 'handleConnect')

      IoT.client.subscribe(IoT.iotTopic)
      onConnect()
    }

    const handleMessage = (listenedTopic, message) => {
      logger(
        'AWS IoT',
        'handleMessage',
        'listenedTopic', listenedTopic,
        'message', message
      )

      onMessage(message)
    }

    IoT.client.on('connect', handleConnect)
    IoT.client.on('message', handleMessage)
    IoT.client.on('close', handleClose)
  },

  disconnect: () => {
    logger('AWS IoT', 'disconnect')

    IoT.client.end()
  },

  send: message => {
    logger(
      'AWS IoT',
      'send',
      'iotTopic', IoT.iotTopic,
      'message', message
    )

    IoT.client.publish(IoT.iotTopic, message)
  }
}

export default IoT
