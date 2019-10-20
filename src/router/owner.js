import OwnerList from '../components/owner/List'
import OwnerCreate from '../components/owner/Create'
import OwnerUpdate from '../components/owner/Update'
import OwnerShow from '../components/owner/Show'

export default [
  { name: 'OwnerList', path: '/owners/', component: OwnerList },
  { name: 'OwnerCreate', path: '/owners/create', component: OwnerCreate },
  { name: 'OwnerUpdate', path: '/owners/edit/:id', component: OwnerUpdate },
  { name: 'OwnerShow', path: '/owners/show/:id', component: OwnerShow }
]
