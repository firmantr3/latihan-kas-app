const Welcome = () => import('@/pages/welcome').then(m => m.default || m)
const Tambah = () => import('@/pages/tambah').then(m => m.default || m)

const NotFound = () => import('@/pages/errors/404').then(m => m.default || m)

export default [
  { path: '/', name: 'welcome', component: Welcome },
  { path: '/tambah', name: 'tambah', component: Tambah },

  { path: '*', component: NotFound }
]
