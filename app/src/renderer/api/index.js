// import gql from 'graphql-tag'

// import { IOT_TOPIC } from '../constants/iot'

export function fetchAllMessages (cb) {
  // const topic = IOT_TOPIC

  return {
    // messages: {
    //   query: gql`{
    //     messages(timestamp: ${0}, topic: "${topic}") {
    //       authorName, id, text, threadID, threadName, timestamp
    //     }
    //   }`,
    //   variables: {},
    //   pollInterval: 1000 * 30 // 30 seconds
    // }
  }
}

export function createMessage ({ text, thread }) {
  const timestamp = Date.now()
  const id = 'm_' + timestamp

  return {
    id,
    text,
    timestamp,
    threadID: thread.id,
    threadName: thread.name,
    authorName: 'Conroy'
  }
}
