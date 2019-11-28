import Index from '../components/Index'
import NotFound from '../components/templates/404'
import PermissionDenied from '../components/templates/403'
import Home from '../components/Home'
import Logout from '../components/Logout'

export default [
  { name: 'Index', path: '/', component: Index },
  { name: '404', path: '*', component: NotFound },
  { name: '403', path: '/403', component: PermissionDenied },
  { name: 'Home', path: '/home', component: Home, meta: { requiresAuth: true, requiresRole: "ROLE_CLIENT"}  },
  { name: 'Logout', path: '/logout', component: Logout}
]
