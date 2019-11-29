<template>
    <div>
        <h1>Registro de usuarios</h1>
        <form @submit.prevent="crearUsuario({email:email,password:pass1})">
            <input type="email" placeholder="Ingrese correo" v-model="email"><br>
            <input type="password" placeholder="Contraseña" v-model="pass1"><br>
            <input type="password" placeholder="Repita contraseña" v-model="pass2"><br>
            <button type="submit" :disabled="!desactivar">Registrarse</button>
        </form>
        <p style="color:red;">{{error}}</p>
    </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
    name:'Registro',
    data(){
        return{
            email:'',
            pass1:'',
            pass2:''
        }
    },
    methods:{
        ...mapActions(['crearUsuario'])
    },
    computed:{
        ...mapState(['error']),
        desactivar(){
           return this.pass1 === this.pass2 && this.pass1 != ''
        }
    }
}
</script>