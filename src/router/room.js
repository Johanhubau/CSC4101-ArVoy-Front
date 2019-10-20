import RoomList from '../components/room/List'
import RoomCreate from '../components/room/Create'
import RoomUpdate from '../components/room/Update'
import RoomShow from '../components/room/Show'

export default [
  { name: 'RoomList', path: '/rooms/', component: RoomList },
  { name: 'RoomCreate', path: '/rooms/create', component: RoomCreate },
  { name: 'RoomUpdate', path: '/rooms/edit/:id', component: RoomUpdate },
  { name: 'RoomShow', path: '/rooms/show/:id', component: RoomShow }
]
