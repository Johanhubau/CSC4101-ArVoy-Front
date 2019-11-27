import RegionList from '../components/region/List'
import RegionCreate from '../components/region/Create'
import RegionUpdate from '../components/region/Update'
import RegionShow from '../components/region/Show'
import RegionAdd from '../components/region/Add'
import RegionDisplay from '../components/region/Display'

export default [
  { name: 'RegionList', path: '/admin/regions/', component: RegionList },
  { name: 'RegionCreate', path: '/admin/regions/create', component: RegionCreate },
  { name: 'RegionUpdate', path: '/admin/regions/edit/:id', component: RegionUpdate },
  { name: 'RegionShow', path: '/admin/regions/show/:id', component: RegionShow },
  { name: 'RegionAdd', path: '/admin/regions/add', component: RegionAdd },
  { name: 'RegionDisplay', path: '/regions/', component: RegionDisplay }
]
