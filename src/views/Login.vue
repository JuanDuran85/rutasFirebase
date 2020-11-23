<template>
  <div class="container my-5">
    <h1>Login de Usuarios</h1>
    <div class="bg-light">
      <b-form >
        <b-form-group id="input-group-1" label="Email address:" label-for="input-1" description="We'll never share your email with anyone else.">
          <b-form-input id="input-1" v-model="form.email" type="email" required placeholder="Enter email"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Password:" label-for="input-2">
          <b-form-input id="input-2" v-model="form.clave" type="password" required placeholder="Enter password"></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
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
}
</script>
