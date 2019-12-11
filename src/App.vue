<template>
    <div>
      <router-link :to="{name:'registro'}" v-if="!existeUsuario">Registro |</router-link>
      <router-link :to="{name:'inicio'}"  v-if="existeUsuario">Inicio |</router-link>
      <router-link :to="{name:'ingreso'}"  v-if="!existeUsuario">Ingreso |</router-link>
      <a><button @click="cerrarSesion" v-if="existeUsuario">Cerrar Sesion</button></a>
    <router-view/>
    </div>
</template>

<script>
import {mapActions,mapGetters} from "vuex";

export default {
  name: 'App',

  components: {

  },
  methods:{
    ...mapActions(['cerrarSesion'])
  },
  computed:{
    ...mapGetters(['existeUsuario'])
  },

  data: () => ({
    //
  }),
};
</script>
