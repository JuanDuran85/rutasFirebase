<template>
    <div class="container">
        <h2 class="center">Agregando Usuario</h2>
        <b-form @submit.prevent="agregando">
            <b-form-group id="input-group-1" label="Nombre:" label-for="input-1">
                <b-form-input id="input-1" v-model="form.name" type="text" required placeholder="Enter nombre"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Apellido:" label-for="input-2">
                <b-form-input id="input-2" v-model="form.lastname" type="text" required placeholder="Enter apellido"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Edad:" label-for="input-3">
                <b-form-input id="input-3" v-model="form.age" type="number" required placeholder="Enter Edad"></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Agregar</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
    </div>
</template>

<script>
    export default {
        name: 'Agregar',
        data() {
            return {
                form: {
                    name: '',
                    lastname: '',
                    age: 0
                }
            }
        },
        methods: {
            agregando(){
                if (this.form.name && this.form.name.length > 2 && this.form.lastname && this.form.lastname.length > 2 && this.form.age && this.form.age > 0) {
                    this.$store.dispatch('agregandoUsers',this.form);
                } else {
                    console.log("No se puede");
                }
            }
        },
    }
</script>

<style>

</style>