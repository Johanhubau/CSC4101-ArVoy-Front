import RegionList from '../components/region/List'
import RegionCreate from '../components/region/Create'
import RegionUpdate from '../components/region/Update'
import RegionShow from '../components/region/Show'

export default [
  { name: 'RegionList', path: '/admin/regions/', component: RegionList },
  { name: 'RegionCreate', path: '/admin/regions/create', component: RegionCreate },
  { name: 'RegionUpdate', path: '/admin/regions/edit/:id', component: RegionUpdate },
  { name: 'RegionShow', path: '/admin/regions/show/:id', component: RegionShow }
]
