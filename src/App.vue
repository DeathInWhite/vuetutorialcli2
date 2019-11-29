<template>
    <div>
      <router-link :to="{name:'registro'}">Registro</router-link> |
      <router-link :to="{name:'inicio'}">Inicio</router-link>
    <router-view/>
    </div>
</template>

<script>
export default {
  name: 'App',

  components: {

  },

  data: () => ({
    //
  }),
};
</script>
