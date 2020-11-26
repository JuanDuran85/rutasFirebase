<template>
  <div class="container">
      <h1 class="my-5">Ver Usuarios....</h1>
      <b-table striped hover :items="dataUsers"></b-table>

      <hr>
        <el-table
          :data="dataUsers"
          style="width: 100%">
            <el-table-column
              label="Id"
              width="250">
              <template slot-scope="scope">
                <i class="el-icon-user"></i>
                <span style="margin-left: 10px">{{ scope.row.id }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="Nombre"
              width="180">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                  <p>Name: {{ scope.row.name }}</p>
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              label="Apellido"
              width="180">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                  <p>Last Name: {{ scope.row.last_name }}</p>
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.last_name }}</el-tag>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              label="Edad"
              width="180">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                  <p>Age: {{ scope.row.age }}</p>
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.age }}</el-tag>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              label="Operaciones">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.row.id)">Editar</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.row.id)">Eliminar</el-button>
              </template>
            </el-table-column>
        </el-table>


  </div>
</template>

<script>
export default {
    name: 'Usuarios',
    data() {
      return {
       
      }
    },
    computed: {
      dataUsers(){
        return this.$store.getters.mostrarUsuarios;
      }
    },
    methods: {
      handleDelete(id){
        this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: 'Se envió a borrar'
          });
          this.$store.dispatch('eliminarUsuario',id);
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'Delete canceled'
          });          
        });
      },
      handleEdit(id){
        this.$router.push({name: 'Editar', params:{id:id}});
      }
    },
}
</script>

<style>

</style>