export default [
  {
    path: '/',
    name: 'chat',
    component: require('components/chat/Chat')
  },
  {
    path: '*',
    redirect: '/'
  }
]
