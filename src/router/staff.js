import StaffList from '../components/staff/List'
import StaffCreate from '../components/staff/Create'
import StaffUpdate from '../components/staff/Update'
import StaffShow from '../components/staff/Show'

export default [
  { name: 'StaffList', path: '/staff/', component: StaffList },
  { name: 'StaffCreate', path: '/staff/create', component: StaffCreate },
  { name: 'StaffUpdate', path: '/staff/edit/:id', component: StaffUpdate },
  { name: 'StaffShow', path: '/staff/show/:id', component: StaffShow }
]
