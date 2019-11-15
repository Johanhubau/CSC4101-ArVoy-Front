import Index from '../components/admin/Index'

//Clients
import ClientList from '../components/client/List'
import ClientCreate from '../components/client/Create'
import ClientUpdate from '../components/client/Update'
import ClientShow from '../components/client/Show'

//Comments
import CommentList from '../components/comment/List'
import CommentCreate from '../components/comment/Create'
import CommentUpdate from '../components/comment/Update'
import CommentShow from '../components/comment/Show'

//Owners
import OwnerList from '../components/owner/List'
import OwnerCreate from '../components/owner/Create'
import OwnerUpdate from '../components/owner/Update'
import OwnerShow from '../components/owner/Show'

//Regions
import RegionList from '../components/region/List'
import RegionCreate from '../components/region/Create'
import RegionUpdate from '../components/region/Update'
import RegionShow from '../components/region/Show'

//Reservations
import ReservationList from '../components/reservation/List'
import ReservationCreate from '../components/reservation/Create'
import ReservationUpdate from '../components/reservation/Update'
import ReservationShow from '../components/reservation/Show'

//Rooms
import RoomList from '../components/room/List'
import RoomCreate from '../components/room/Create'
import RoomUpdate from '../components/room/Update'
import RoomShow from '../components/room/Show'

//Staffs
import StaffList from '../components/staff/List'
import StaffCreate from '../components/staff/Create'
import StaffUpdate from '../components/staff/Update'
import StaffShow from '../components/staff/Show'

//Unavailable periods
import UnavailablePeriodList from '../components/unavailableperiod/List'
import UnavailablePeriodCreate from '../components/unavailableperiod/Create'
import UnavailablePeriodUpdate from '../components/unavailableperiod/Update'
import UnavailablePeriodShow from '../components/unavailableperiod/Show'

//Users
import UserList from '../components/user/List'
import UserCreate from '../components/user/Create'
import UserUpdate from '../components/user/Update'
import UserShow from '../components/user/Show'

export default [
  { name: 'AdminIndex', path: '/admin/', component: Index },

  //Clients
  { name: 'ClientList', path: '/admin/clients/', component: ClientList },
  { name: 'ClientCreate', path: '/admin/clients/create', component: ClientCreate },
  { name: 'ClientUpdate', path: '/admin/clients/edit/:id', component: ClientUpdate },
  { name: 'ClientShow', path: '/admin/clients/show/:id', component: ClientShow },

  //Comments
  { name: 'CommentList', path: '/admin/comments/', component: CommentList },
  { name: 'CommentCreate', path: '/admin/comments/create', component: CommentCreate },
  { name: 'CommentUpdate', path: '/admin/comments/edit/:id', component: CommentUpdate },
  { name: 'CommentShow', path: '/admin/comments/show/:id', component: CommentShow },

  //Owners
  { name: 'OwnerList', path: '/admin/owners/', component: OwnerList },
  { name: 'OwnerCreate', path: '/admin/owners/create', component: OwnerCreate },
  { name: 'OwnerUpdate', path: '/admin/owners/edit/:id', component: OwnerUpdate },
  { name: 'OwnerShow', path: '/admin/owners/show/:id', component: OwnerShow },

  //Regions
  { name: 'RegionList', path: '/admin/regions/', component: RegionList },
  { name: 'RegionCreate', path: '/admin/regions/create', component: RegionCreate },
  { name: 'RegionUpdate', path: '/admin/regions/edit/:id', component: RegionUpdate },
  { name: 'RegionShow', path: '/admin/regions/show/:id', component: RegionShow },

  //Reservations
  { name: 'ReservationList', path: '/admin/reservations/', component: ReservationList },
  { name: 'ReservationCreate', path: '/admin/reservations/create', component: ReservationCreate },
  { name: 'ReservationUpdate', path: '/admin/reservations/edit/:id', component: ReservationUpdate },
  { name: 'ReservationShow', path: '/admin/reservations/show/:id', component: ReservationShow },

  //Rooms
  { name: 'RoomList', path: '/admin/rooms/', component: RoomList },
  { name: 'RoomCreate', path: '/admin/rooms/create', component: RoomCreate },
  { name: 'RoomUpdate', path: '/admin/rooms/edit/:id', component: RoomUpdate },
  { name: 'RoomShow', path: '/admin/rooms/show/:id', component: RoomShow },

  //Staffs
  { name: 'StaffList', path: '/admin/staff/', component: StaffList },
  { name: 'StaffCreate', path: '/admin/staff/create', component: StaffCreate },
  { name: 'StaffUpdate', path: '/admin/staff/edit/:id', component: StaffUpdate },
  { name: 'StaffShow', path: '/admin/staff/show/:id', component: StaffShow },

  //Unavailable periods
  { name: 'UnavailablePeriodList', path: '/admin/unavailable_periods/', component: UnavailablePeriodList },
  { name: 'UnavailablePeriodCreate', path: '/admin/unavailable_periods/create', component: UnavailablePeriodCreate },
  { name: 'UnavailablePeriodUpdate', path: '/admin/unavailable_periods/edit/:id', component: UnavailablePeriodUpdate },
  { name: 'UnavailablePeriodShow', path: '/admin/unavailable_periods/show/:id', component: UnavailablePeriodShow },

  //Users
  { name: 'UserList', path: '/admin/users/', component: UserList },
  { name: 'UserCreate', path: '/admin/users/create', component: UserCreate },
  { name: 'UserUpdate', path: '/admin/users/edit/:id', component: UserUpdate },
  { name: 'UserShow', path: '/admin/users/show/:id', component: UserShow }
]
