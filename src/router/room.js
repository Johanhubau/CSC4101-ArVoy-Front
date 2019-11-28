import RoomList from '../components/room/List'
import RoomCreate from '../components/room/Create'
import RoomUpdate from '../components/room/Update'
import RoomShow from '../components/room/Show'
import RoomAdd from '../components/room/Add'
import RoomDisplay from '../components/templates/RoomDisplay'

export default [
  { name: 'RoomList', path: '/admin/rooms/', component: RoomList },
  { name: 'RoomCreate', path: '/admin/rooms/create', component: RoomCreate },
  { name: 'RoomUpdate', path: '/admin/rooms/edit/:id', component: RoomUpdate },
  { name: 'RoomShow', path: '/admin/rooms/show/:id', component: RoomShow },
  { name: 'RoomAdd', path: '/owners/rooms/add', component: RoomAdd },
  { name: 'RoomDisplay', path: '/rooms/:id', component: RoomDisplay }
]
