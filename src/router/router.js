import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue';
import firebase from 'firebase';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/usuarios',
    name: 'Usuarios',
    component: () => import(/* webpackChunkName: "Usuarios" */ '../views/Usuarios.vue'),
    meta: {
      login: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "Registro" */ '../views/Register.vue')
  },
  {
    path: '*',
    redirect: '/login'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  var usuario = firebase.auth().currentUser;
  let registroRequerido = to.matched.some(ruta => ruta.meta.login)

  if (registroRequerido && !usuario) {
      next('login');
  } else if(usuario && !registroRequerido) {
      next('usuarios');
  } else {
    next()  
  }
})

export default router
