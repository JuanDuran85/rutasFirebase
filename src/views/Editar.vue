<template>
    <div class="container">
        <h2>Editando Usuario</h2>
        <div class="bg-light" v-if="this.$route.params.id">
            <b-form @submit.prevent="actualizandoUser">
                <b-form-group id="input-group-1" label="Nombre:" label-for="input-1">
                <b-form-input id="input-1" v-model="form.name" type="text" required placeholder="Enter nombre"></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Apellido:" label-for="input-2">
                <b-form-input id="input-2" v-model="form.lastname" type="text" required placeholder="Enter apellido"></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-3" label="Edad:" label-for="input-3">
                <b-form-input id="input-3" v-model="form.age" type="number" required placeholder="Enter eddad"></b-form-input>
                </b-form-group>

                <b-button type="submit" variant="primary" class="mx-1">Actualizar</b-button>
                <b-button type="reset" variant="danger" class="mx-1">Reset</b-button>
                <b-button type="reset" variant="info" class="mx-1" @click="$router.push('/usuarios')">Regresar</b-button>
            </b-form>
        </div>
        <div v-else>
            <p>Retornando a la vista de usuario</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Editar',
    data() {
        return {
            form: {
                name: '',
                lastname: '',
                age: '',
                id: ''
            }
        }
    },
    created() {
        let datos = {};
        datos = this.$store.getters.mostrarUsuarios.find(resp => resp.id === this.$route.params.id)
        if (datos){
            this.form.name = datos.name;
            this.form.lastname = datos.last_name;
            this.form.age = datos.age;
            this.form.id = datos.id;
        }else {
            this.$message('Usuario no existe... retornando.');
            setTimeout(()=>{
                this.$router.push('/usuarios');
            },1000);
        }
    },
    methods: {
        actualizandoUser(){
            if (this.form.name && this.form.name.length > 2 && this.form.lastname && this.form.lastname.length > 2 && this.form.age && this.form.age > 0) {
                let data = {
                    name: this.form.name,
                    lastname: this.form.lastname,
                    age: parseInt(this.form.age),
                    id: this.form.id,
                }
                this.$store.dispatch('actualizarUsusario',data);
            } else {
                console.log("No se puede");
            }
        }
    },
}
</script>

<style>

</style>