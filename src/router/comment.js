import CommentList from '../components/comment/List'
import CommentCreate from '../components/comment/Create'
import CommentUpdate from '../components/comment/Update'
import CommentShow from '../components/comment/Show'

export default [
  { name: 'CommentList', path: '/admin/comments/', component: CommentList },
  { name: 'CommentCreate', path: '/admin/comments/create', component: CommentCreate },
  { name: 'CommentUpdate', path: '/admin/comments/edit/:id', component: CommentUpdate },
  { name: 'CommentShow', path: '/admin/comments/show/:id', component: CommentShow }
]
