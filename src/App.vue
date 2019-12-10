<template>
    <div>
      <router-link :to="{name:'registro'}">Registro</router-link> |
      <router-link :to="{name:'inicio'}">Inicio</router-link> |
      <router-link :to="{name:'ingreso'}">Ingreso</router-link> |
      <a><button @click="cerrarSesion">Cerrar Sesion</button></a>
    <router-view/>
    </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: 'App',

  components: {

  },
  methods:{
        ...mapActions(['cerrarSesion'])
    },

  data: () => ({
    //
  }),
};
</script>
