import StaffList from '../components/staff/List'
import StaffCreate from '../components/staff/Create'
import StaffUpdate from '../components/staff/Update'
import StaffShow from '../components/staff/Show'
import StaffDisplay from '../components/staff/Display'

export default [
  { name: 'StaffList', path: '/admin/staff/', component: StaffList, meta: { requiresAuth: true, requiresRole: "ROLE_ADMIN"}  },
  { name: 'StaffCreate', path: '/admin/staff/create', component: StaffCreate, meta: { requiresAuth: true, requiresRole: "ROLE_ADMIN"}  },
  { name: 'StaffUpdate', path: '/admin/staff/edit/:id', component: StaffUpdate, meta: { requiresAuth: true, requiresRole: "ROLE_ADMIN"}  },
  { name: 'StaffShow', path: '/admin/staff/show/:id', component: StaffShow, meta: { requiresAuth: true, requiresRole: "ROLE_ADMIN"}  },
  { name: 'StaffDisplay', path: '/admin/staff/:id', component: StaffDisplay, meta: { requiresAuth: true, requiresRole: "ROLE_ADMIN"}  }
]
