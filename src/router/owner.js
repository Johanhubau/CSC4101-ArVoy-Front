import OwnerList from '../components/owner/List'
import OwnerCreate from '../components/owner/Create'
import OwnerUpdate from '../components/owner/Update'
import OwnerShow from '../components/owner/Show'
import Dashboard from '../components/owner/Dashboard'
import Register from '../components/owner/Register'

export default [
  { name: 'OwnerList', path: '/admin/owners/', component: OwnerList },
  { name: 'OwnerCreate', path: '/admin/owners/create', component: OwnerCreate },
  { name: 'OwnerUpdate', path: '/admin/owners/edit/:id', component: OwnerUpdate },
  { name: 'OwnerShow', path: '/admin/owners/show/:id', component: OwnerShow },
  { name: 'OwnerDashboard', path: '/owners/', component: Dashboard },
  { name: 'OwnerRegister', path: '/register/owner', component: Register }
]
