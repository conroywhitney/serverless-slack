export default [
  {
    path: '/',
    name: 'chat',
    component: require('components/Chat')
  },
  {
    path: '*',
    redirect: '/'
  }
]
