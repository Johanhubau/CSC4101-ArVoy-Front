import StaffList from '../components/staff/List'
import StaffCreate from '../components/staff/Create'
import StaffUpdate from '../components/staff/Update'
import StaffShow from '../components/staff/Show'
import StaffDisplay from '../components/staff/Display'

export default [
  { name: 'StaffList', path: '/admin/staff/', component: StaffList },
  { name: 'StaffCreate', path: '/admin/staff/create', component: StaffCreate },
  { name: 'StaffUpdate', path: '/admin/staff/edit/:id', component: StaffUpdate },
  { name: 'StaffShow', path: '/admin/staff/show/:id', component: StaffShow },
  { name: 'StaffDisplay', path: '/admin/staff/:id', component: StaffDisplay }
]
