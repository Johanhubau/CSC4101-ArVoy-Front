import ClientList from '../components/client/List'
import ClientCreate from '../components/client/Create'
import ClientUpdate from '../components/client/Update'
import ClientShow from '../components/client/Show'

export default [
  { name: 'ClientList', path: '/admin/clients/', component: ClientList, meta: { requiresAuth: true, requiresRole: "ROLE_ADMIN"} },
  { name: 'ClientCreate', path: '/admin/clients/create', component: ClientCreate, meta: { requiresAuth: true, requiresRole: "ROLE_CLIENT"} },
  { name: 'ClientUpdate', path: '/admin/clients/edit/:id', component: ClientUpdate, meta: { requiresAuth: true, requiresRole: "ROLE_CLIENT"} },
  { name: 'ClientShow', path: '/admin/clients/show/:id', component: ClientShow, meta: { requiresAuth: true, requiresRole: "ROLE_CLIENT"} }
]
