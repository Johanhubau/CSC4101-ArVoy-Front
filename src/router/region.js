import RegionList from '../components/region/List'
import RegionCreate from '../components/region/Create'
import RegionUpdate from '../components/region/Update'
import RegionShow from '../components/region/Show'
import RegionAdd from '../components/region/Add'
import RegionDisplay from '../components/region/Display'

export default [
  { name: 'RegionList', path: '/admin/regions/', component: RegionList, meta: { requiresAuth: true, requiresRole: "ROLE_ADMIN"}  },
  { name: 'RegionCreate', path: '/admin/regions/create', component: RegionCreate, meta: { requiresAuth: true, requiresRole: "ROLE_ADMIN"}  },
  { name: 'RegionUpdate', path: '/admin/regions/edit/:id', component: RegionUpdate, meta: { requiresAuth: true, requiresRole: "ROLE_ADMIN"}  },
  { name: 'RegionShow', path: '/admin/regions/show/:id', component: RegionShow, meta: { requiresAuth: true, requiresRole: "ROLE_ADMIN"}  },
  { name: 'RegionAdd', path: '/admin/regions/add', component: RegionAdd, meta: { requiresAuth: true, requiresRole: "ROLE_ADMIN"}  },
  { name: 'RegionDisplay', path: '/regions/', component: RegionDisplay }
]
