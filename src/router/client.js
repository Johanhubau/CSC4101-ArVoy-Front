import ClientList from '../components/client/List'
import ClientCreate from '../components/client/Create'
import ClientUpdate from '../components/client/Update'
import ClientShow from '../components/client/Show'
import ClientRegister from '../components/client/Register'
import ClientDisplay from '../components/client/Display'
import ClientDashboard from '../components/client/Dashboard'

export default [
  { name: 'ClientList', path: '/admin/clients/', component: ClientList, meta: { requiresAuth: true, requiresRole: "ROLE_ADMIN"} },
  { name: 'ClientCreate', path: '/admin/clients/create', component: ClientCreate, meta: { requiresAuth: true, requiresRole: "ROLE_ADMIN"} },
  { name: 'ClientUpdate', path: '/admin/clients/edit/:id', component: ClientUpdate, meta: { requiresAuth: true, requiresRole: "ROLE_ADMIN"} },
  { name: 'ClientShow', path: '/admin/clients/show/:id', component: ClientShow, meta: { requiresAuth: true, requiresRole: "ROLE_ADMIN"} },
  { name: 'ClientRegister', path: '/register', component: ClientRegister},
  { name: 'ClientDisplay', path: '/clients/:id', component: ClientDisplay, meta: { requiresAuth: true, requiresRole: "ROLE_CLIENT"}},
  { name: 'ClientDashboard', path: '/home/:id', component: ClientDashboard, meta: { requiresAuth: true, requiresRole: "ROLE_CLIENT"} }
]
