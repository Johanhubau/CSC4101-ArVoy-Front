import RegionList from '../components/region/List'
import RegionCreate from '../components/region/Create'
import RegionUpdate from '../components/region/Update'
import RegionShow from '../components/region/Show'

export default [
  { name: 'RegionList', path: '/regions/', component: RegionList },
  { name: 'RegionCreate', path: '/regions/create', component: RegionCreate },
  { name: 'RegionUpdate', path: '/regions/edit/:id', component: RegionUpdate },
  { name: 'RegionShow', path: '/regions/show/:id', component: RegionShow }
]
