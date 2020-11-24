<template>
  <div class="container my-5">
    <h1>Login de Usuarios</h1>
    <div class="bg-light">
      <b-form @submit.prevent="login">
        <b-form-group id="input-group-1" label="Email address:" label-for="input-1" description="We'll never share your email with anyone else.">
          <b-form-input id="input-1" v-model="form.email" type="email" required placeholder="Enter email"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Password:" label-for="input-2">
          <b-form-input id="input-2" v-model="form.clave" type="password" required placeholder="Enter password"></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Ingresar</b-button>
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
        clave: ''
      }
    }
  },
  methods: {
    login(){
      if(this.form.email && this.form.clave && this.form.clave.length >= 6){
        console.log("entro");
        firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.clave)
          .then(resp => {
            console.log(resp.user.photoURL);
            console.log(resp.user.phoneNumber);
            console.log(resp.user.displayName);
            console.log(resp.user.email);
            console.log(resp.user.emailVerified);
            console.log(resp.user.isAnonymous);
            console.log(resp.user.metadata.creationTime);
            console.log(resp.user.metadata.lastSignInTime);
            console.log(resp.user.refreshToken);
            console.log(resp.user.uid);
            this.$router.push('/usuarios');
          })
          .catch(error => {
            console.error(error.code);
            console.error(error.message);
            if (error.code == "auth/wrong-password") {
              this.errores(error);
            } else if(error.code == "auth/invalid-email") {
              this.errores(error);
            } else if(error.code == "auth/user-disabled"){
              this.errores(error);
            } else {
              this.errores(error);
              this.$router.push('/register');
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
