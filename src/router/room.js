import RoomList from '../components/room/List'
import RoomCreate from '../components/room/Create'
import RoomUpdate from '../components/room/Update'
import RoomShow from '../components/room/Show'
import RoomAdd from '../components/room/Add'
import RoomDisplay from '../components/templates/RoomDisplay'

export default [
  { name: 'RoomList', path: '/admin/rooms/', component: RoomList, meta: { requiresAuth: true, requiresRole: "ROLE_ADMIN"}  },
  { name: 'RoomCreate', path: '/admin/rooms/create', component: RoomCreate, meta: { requiresAuth: true, requiresRole: "ROLE_ADMIN"}  },
  { name: 'RoomUpdate', path: '/admin/rooms/edit/:id', component: RoomUpdate, meta: { requiresAuth: true, requiresRole: "ROLE_ADMIN"}  },
  { name: 'RoomShow', path: '/admin/rooms/show/:id', component: RoomShow, meta: { requiresAuth: true, requiresRole: "ROLE_ADMIN"}  },
  { name: 'RoomAdd', path: '/owners/:id/rooms/add', component: RoomAdd, meta: { requiresAuth: true, requiresRole: "ROLE_OWNER"}  },
  { name: 'RoomDisplay', path: '/rooms/:id', component: RoomDisplay }
]
