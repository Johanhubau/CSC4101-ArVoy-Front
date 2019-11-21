import UnavailablePeriodList from '../components/unavailableperiod/List'
import UnavailablePeriodCreate from '../components/unavailableperiod/Create'
import UnavailablePeriodUpdate from '../components/unavailableperiod/Update'
import UnavailablePeriodShow from '../components/unavailableperiod/Show'

export default [
  { name: 'UnavailablePeriodList', path: '/admin/unavailable_periods/', component: UnavailablePeriodList },
  { name: 'UnavailablePeriodCreate', path: '/admin/unavailable_periods/create', component: UnavailablePeriodCreate },
  { name: 'UnavailablePeriodUpdate', path: '/admin/unavailable_periods/edit/:id', component: UnavailablePeriodUpdate },
  { name: 'UnavailablePeriodShow', path: '/admin/unavailable_periods/show/:id', component: UnavailablePeriodShow }
]
