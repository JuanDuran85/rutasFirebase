<template>
  <div>
    <b-jumbotron header="BootstrapVue" lead="Bootstrap v4 Components for Vue.js 2">
      <p>For more information visit website</p>
      <b-button variant="primary" href="#">More Info</b-button>
      <b-button variant="danger" href="#" @click="salir" class="mx-3">Salir</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
  import firebase from 'firebase';
  export default {
    name: 'Inicio',
    methods: {
      salir(){
        firebase.auth().signOut().then(() => {
            this.$router.replace('/login');
        }).catch((error) => {
            console.error(error);
        });
      }
    },
  }
</script>

<style scoped lang="scss">

</style>
