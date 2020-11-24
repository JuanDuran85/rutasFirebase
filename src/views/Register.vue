<template>
  <div class="container my-5">
    <h1>Registro de Usuarios</h1>
    <div class="bg-light">
      <b-form @submit.prevent="login">
        <b-form-group id="input-group-1" label="Email address:" label-for="input-1" description="We'll never share your email with anyone else.">
          <b-form-input id="input-1" v-model="form.email" type="email" required placeholder="Enter email"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Nombre:" label-for="input-2">
          <b-form-input id="input-2" v-model="form.name" type="text" required placeholder="Enter name"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Password:" label-for="input-3">
          <b-form-input id="input-3" v-model="form.clave" type="password" required placeholder="Enter password"></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Registrar</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Login',
  data() {
    return {
      form: {
        email: '',
        clave: '',
        name: ''
      }
    }
  },
  methods: {
    login(){
      if(this.form.email && this.form.clave && this.form.clave.length >= 6 && this.form.name){
        console.log("entro");
        firebase.auth().createUserWithEmailAndPassword(this.form.email, this.form.clave)
          .then(resp => { 
              console.log(resp.user);
              return resp.user.updateProfile({
                  displayName: this.form.name
              }).then(() => {
                this.$router.push('/');
                })
          })
          .catch(error => {
            console.error(error.code);
            console.error(error.message);
            if (error.code == "auth/email-already-in-use") {
              this.errores(error);
            } else if(error.code == "auth/invalid-email") {
              this.errores(error);
            } else if(error.code == "auth/weak-password"){
              this.errores(error);
            } else {
              this.errores(error);
            }
          })
      } else {
        console.log("No se puede conectar");
      }
    },
    errores(error){
      this.$notify.error({
        title: 'Error',
        message: `${error.message}`
      })
    }
  },
}
</script>
