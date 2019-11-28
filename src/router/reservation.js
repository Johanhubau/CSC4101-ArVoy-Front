import ReservationList from '../components/reservation/List'
import ReservationCreate from '../components/reservation/Create'
import ReservationUpdate from '../components/reservation/Update'
import ReservationShow from '../components/reservation/Show'
import ReservationDisplay from '../components/reservation/Display'

export default [
  { name: 'ReservationList', path: '/admin/reservations/', component: ReservationList, meta: { requiresAuth: true, requiresRole: "ROLE_ADMIN"}  },
  { name: 'ReservationCreate', path: '/admin/reservations/create', component: ReservationCreate, meta: { requiresAuth: true, requiresRole: "ROLE_ADMIN"}  },
  { name: 'ReservationUpdate', path: '/admin/reservations/edit/:id', component: ReservationUpdate, meta: { requiresAuth: true, requiresRole: "ROLE_ADMIN"}  },
  { name: 'ReservationShow', path: '/admin/reservations/show/:id', component: ReservationShow, meta: { requiresAuth: true, requiresRole: "ROLE_ADMIN"}  },
  { name: 'ReservationDisplay', path: '/reservations/', component: ReservationDisplay }
]
