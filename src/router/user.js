import UserList from '../components/user/List'
import UserCreate from '../components/user/Create'
import UserUpdate from '../components/user/Update'
import UserShow from '../components/user/Show'

export default [
  { name: 'UserList', path: '/admin/users/', component: UserList },
  { name: 'UserCreate', path: '/admin/users/create', component: UserCreate },
  { name: 'UserUpdate', path: '/admin/users/edit/:id', component: UserUpdate },
  { name: 'UserShow', path: '/admin/users/show/:id', component: UserShow }
]
