import Vue from 'vue';
import Vuex from 'vuex';
import { db } from "../main";
import router from '../router/router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuarios: [],
  },
  getters: {
    mostrarUsuarios(state){
      return state.usuarios;
    }
  },
  mutations: {
    mutarUsuarios(state,arreglo){
      state.usuarios = arreglo;
    }
  },
  actions: {
    traerData({commit}){
/*       db.collection("usuarios").get().then(respuesta => {
        let arreglo = [];
        respuesta.forEach(element =>{
          arreglo.push({
            id: element.id,
            name: element.data().name,
            last_name: element.data().lastname,
            age: element.data().age,
          })
        });
        commit('mutarUsuarios',arreglo);
      }); */
      db.collection("usuarios").onSnapshot(respuesta => {
        let arreglo = [];
        respuesta.forEach(element =>{
          arreglo.push({
            id: element.id,
            name: element.data().name,
            last_name: element.data().lastname,
            age: element.data().age,
          })
        });
        commit('mutarUsuarios',arreglo);
      });
    },
    agregandoUsers(context,data){
      db.collection("usuarios").add({
        name: data.name,
        lastname: data.lastname,
        age: data.age
      }).then(resp=>{
        console.log(resp);
      })
    },
    eliminarUsuario(context,id){
      db.collection('usuarios').doc(id).delete().then(()=>{
        console.log("Elemento borrado");
      }).catch(error=>{
        console.log(error);
      })
    },
    actualizarUsusario(context,data){
      db.collection("usuarios").doc(data.id).update({
        name: data.name,
        lastname: data.lastname,
        age: data.age
      }).then(()=>{
        console.log("Actualizo");
        setTimeout(()=>{
          router.replace('/usuarios');
        },1000);
      })
    }
  },
})
