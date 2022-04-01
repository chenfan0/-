const user = () => import('@/views/main/system/user/user.vue')
export default {
  path: '/main/system/users',
  name: 'user',
  component: user,
  children: []
}
