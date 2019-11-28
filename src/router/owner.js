import OwnerList from '../components/owner/List'
import OwnerCreate from '../components/owner/Create'
import OwnerUpdate from '../components/owner/Update'
import OwnerShow from '../components/owner/Show'
import Dashboard from '../components/owner/Dashboard'
import Register from '../components/owner/Register'
import OwnerSettings from '../components/owner/Settings'
import OwnerDisplay from '../components/owner/Display'

export default [
  { name: 'OwnerList', path: '/admin/owners/', component: OwnerList, meta: { requiresAuth: true, requiresRole: "ROLE_ADMIN"}  },
  { name: 'OwnerCreate', path: '/admin/owners/create', component: OwnerCreate, meta: { requiresAuth: true, requiresRole: "ROLE_ADMIN"}  },
  { name: 'OwnerUpdate', path: '/admin/owners/edit/:id', component: OwnerUpdate, meta: { requiresAuth: true, requiresRole: "ROLE_ADMIN"}  },
  { name: 'OwnerShow', path: '/admin/owners/show/:id', component: OwnerShow, meta: { requiresAuth: true, requiresRole: "ROLE_ADMIN"}  },
  { name: 'OwnerDashboard', path: '/owners/:id', component: Dashboard, meta: { requiresAuth: true, requiresRole: "ROLE_OWNER"} },
  { name: 'OwnerRegister', path: '/register/owner', component: Register },
  { name: 'OwnerSettings', path: '/owners/:id/settings', component: OwnerSettings, meta: { requiresAuth: true, requiresRole: "ROLE_OWNER"} },
  { name: 'OwnerDisplay', path: '/owners/', component: OwnerDisplay, meta: { requiresAuth: true, requiresRole: "ROLE_OWNER"} }
]
