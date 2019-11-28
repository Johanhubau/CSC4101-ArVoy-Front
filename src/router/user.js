import UserList from '../components/user/List'
import UserCreate from '../components/user/Create'
import UserUpdate from '../components/user/Update'
import UserShow from '../components/user/Show'
import Index from '../components/user/Index'

export default [
  { name: 'UserList', path: '/admin/users/', component: UserList, meta: { requiresAuth: true, requiresRole: "ROLE_ADMIN"} },
  { name: 'UserCreate', path: '/admin/users/create', component: UserCreate, meta: { requiresAuth: true, requiresRole: "ROLE_ADMIN"} },
  { name: 'UserUpdate', path: '/admin/users/edit/:id', component: UserUpdate, meta: { requiresAuth: true, requiresRole: "ROLE_ADMIN"} },
  { name: 'UserShow', path: '/admin/users/show/:id', component: UserShow, meta: { requiresAuth: true, requiresRole: "ROLE_ADMIN"} },
  // { name: 'UserIndex', path: '/users/', component: Index }
]
