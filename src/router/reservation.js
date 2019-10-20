import ReservationList from '../components/reservation/List'
import ReservationCreate from '../components/reservation/Create'
import ReservationUpdate from '../components/reservation/Update'
import ReservationShow from '../components/reservation/Show'

export default [
  { name: 'ReservationList', path: '/reservations/', component: ReservationList },
  { name: 'ReservationCreate', path: '/reservations/create', component: ReservationCreate },
  { name: 'ReservationUpdate', path: '/reservations/edit/:id', component: ReservationUpdate },
  { name: 'ReservationShow', path: '/reservations/show/:id', component: ReservationShow }
]
