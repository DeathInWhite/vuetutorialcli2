<template>
    <div>
        <h1>ruta protegida</h1>
        <h3>Bienvenido {{usuario.email}}</h3>
    </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
    name:'Inicio',
    computed:{
        ...mapState(['usuario'])
    }
}
</script>