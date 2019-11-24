import Index from '../components/admin/Index'


export default [
  { name: 'AdminIndex', path: '/admin/', component: Index, meta: { requiresAuth: true } }

]
