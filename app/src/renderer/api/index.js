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
