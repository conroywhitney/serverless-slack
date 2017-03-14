import gql from 'graphql-tag'
import { map, prop } from 'ramda'

import apollo from './apollo'

import { IOT_TOPIC } from '../constants/iot'

export default {
  async fetchAll () {
    const query = gql`{
      messages(timestamp: ${0}, topic: "${IOT_TOPIC}") {
        payload { authorName, id, text, threadID, threadName, timestamp }
      }
    }`

    const response = await apollo.query({ query })
    const { messages } = await response.data
    const extractPayload = map(prop('payload'))

    console.log('graphql', 'messages', 'fetchAll', 'messages', messages)

    return extractPayload(messages)
  }
}
