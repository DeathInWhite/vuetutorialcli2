<template>
    <div>
        <h1>Inicio de sesion</h1>
        <form @submit.prevent="ingresoUsuario({email,password})">
            <input type="email" v-model="email">
            <input type="password" v-model="password">
            <button type="submit">Acceder</button>
        </form>
        <p style="color:red;">{{error}}</p>
    </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
    name:'Ingreso',
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
        ...mapActions(['ingresoUsuario'])
    },
    computed:{
        ...mapState(['error']),
    }
}
</script>