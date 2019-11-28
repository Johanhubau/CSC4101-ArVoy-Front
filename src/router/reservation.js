import ReservationList from '../components/reservation/List'
import ReservationCreate from '../components/reservation/Create'
import ReservationUpdate from '../components/reservation/Update'
import ReservationShow from '../components/reservation/Show'
import ReservationDisplay from '../components/reservation/Display'

export default [
  { name: 'ReservationList', path: '/admin/reservations/', component: ReservationList },
  { name: 'ReservationCreate', path: '/admin/reservations/create', component: ReservationCreate },
  { name: 'ReservationUpdate', path: '/admin/reservations/edit/:id', component: ReservationUpdate },
  { name: 'ReservationShow', path: '/admin/reservations/show/:id', component: ReservationShow },
  { name: 'ReservationDisplay', path: '/reservations/', component: ReservationDisplay }
]
