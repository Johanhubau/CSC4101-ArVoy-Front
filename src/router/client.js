import ClientList from '../components/client/List'
import ClientCreate from '../components/client/Create'
import ClientUpdate from '../components/client/Update'
import ClientShow from '../components/client/Show'

export default [
  { name: 'ClientList', path: '/admin/clients/', component: ClientList },
  { name: 'ClientCreate', path: '/admin/clients/create', component: ClientCreate },
  { name: 'ClientUpdate', path: '/admin/clients/edit/:id', component: ClientUpdate },
  { name: 'ClientShow', path: '/admin/clients/show/:id', component: ClientShow }
]
