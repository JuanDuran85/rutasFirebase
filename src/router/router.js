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
    path: '/agregar',
    name: 'Agregar',
    component: () => import(/* webpackChunkName: "Agregar" */ '../views/Agregar.vue')
  },
  {
    path: '/editar/:id',
    name: 'Editar',
    component: () => import(/* webpackChunkName: "Editar" */ '../views/Editar.vue')
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
    component: () => import(/* webpackChunkName: "Registro" */ '../views/Register.vue'),
    beforeEnter: (to, from, next) => {
      if (confirm(`ruta actual ${from.path}. Ruta a ir ${to.path}`)) {
        next();
      } else if(confirm(`Quieres ir a Usuarios`)){
        next('/usuarios');
      }else {
        next(false);
      }
    }
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
  console.log(registroRequerido);

  if (registroRequerido && !usuario) {
      next('/login');
  } else {
    next(); 
  }
})

export default router
