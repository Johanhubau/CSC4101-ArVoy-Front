import CommentList from '../components/comment/List'
import CommentCreate from '../components/comment/Create'
import CommentUpdate from '../components/comment/Update'
import CommentShow from '../components/comment/Show'

export default [
  { name: 'CommentList', path: '/admin/comments/', component: CommentList, meta: { requiresAuth: true, requiresRole: "ROLE_ADMIN"}  },
  { name: 'CommentCreate', path: '/admin/comments/create', component: CommentCreate, meta: { requiresAuth: true, requiresRole: "ROLE_ADMIN"}  },
  { name: 'CommentUpdate', path: '/admin/comments/edit/:id', component: CommentUpdate, meta: { requiresAuth: true, requiresRole: "ROLE_ADMIN"}  },
  { name: 'CommentShow', path: '/admin/comments/show/:id', component: CommentShow, meta: { requiresAuth: true, requiresRole: "ROLE_ADMIN"}  }
]
