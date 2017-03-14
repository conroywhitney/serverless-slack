import gql from 'graphql-tag'

import apollo from './apollo'

import { IOT_TOPIC } from '../constants/iot'

export default {
  async fetchAll () {
    const query = gql`{
      messages(timestamp: ${0}, topic: "${IOT_TOPIC}") {
        authorName, id, text, threadID, threadName, timestamp
      }
    }`

    const response = await apollo.query({ query })
    const { messages } = await response.data

    console.log('graphql', 'messages', 'fetchAll', 'messages', messages)

    return messages
  }
}
