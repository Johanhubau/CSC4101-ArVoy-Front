import RoomList from '../components/room/List'
import RoomCreate from '../components/room/Create'
import RoomUpdate from '../components/room/Update'
import RoomShow from '../components/room/Show'

export default [
  { name: 'RoomList', path: '/admin/rooms/', component: RoomList },
  { name: 'RoomCreate', path: '/admin/rooms/create', component: RoomCreate },
  { name: 'RoomUpdate', path: '/admin/rooms/edit/:id', component: RoomUpdate },
  { name: 'RoomShow', path: '/admin/rooms/show/:id', component: RoomShow }
]
