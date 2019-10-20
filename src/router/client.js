import ClientList from '../components/client/List'
import ClientCreate from '../components/client/Create'
import ClientUpdate from '../components/client/Update'
import ClientShow from '../components/client/Show'

export default [
  { name: 'ClientList', path: '/clients/', component: ClientList },
  { name: 'ClientCreate', path: '/clients/create', component: ClientCreate },
  { name: 'ClientUpdate', path: '/clients/edit/:id', component: ClientUpdate },
  { name: 'ClientShow', path: '/clients/show/:id', component: ClientShow }
]
