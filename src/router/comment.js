import CommentList from '../components/comment/List'
import CommentCreate from '../components/comment/Create'
import CommentUpdate from '../components/comment/Update'
import CommentShow from '../components/comment/Show'

export default [
  { name: 'CommentList', path: '/comments/', component: CommentList },
  { name: 'CommentCreate', path: '/comments/create', component: CommentCreate },
  { name: 'CommentUpdate', path: '/comments/edit/:id', component: CommentUpdate },
  { name: 'CommentShow', path: '/comments/show/:id', component: CommentShow }
]
