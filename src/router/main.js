import Index from '../components/Index'
import NotFound from '../components/templates/404'
import PermissionDenied from '../components/templates/403'
import Home from '../components/Home'

export default [
  { name: 'Index', path: '/', component: Index },
  { name: '404', path: '*', component: NotFound },
  { name: '403', path: '/403', component: PermissionDenied },
  { name: 'Home', path: '/home', component: Home },
]
