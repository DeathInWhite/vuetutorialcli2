import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
var firebase = require("firebase/app")

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        usuario: '',
        error: ''
    },
    mutations: { //llenar variables del state
        setUsuario(state, payload) {
            state.usuario = payload
        },
        setError(state, error) {
            state.error = error
        }
    },
    actions: { //ir a las mutations para que realicen llenado del state
        crearUsuario({ commit }, payload) {
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then(res => {
                console.log(res.user.email)
                console.log(res.user.uid)
                commit('setUsuario', { email: res.user.email, uid: res.user.uid })
                router.push({ name: 'inicio' })
            }).catch(err => {
                console.log(err.message)
                commit('setError', err.message)
            });
        },
        ingresoUsuario({commit},payload){
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then(res =>{
                console.log(res)
                commit('setUsuario', { email: res.user.email, uid: res.user.uid })
                router.push({ name: 'inicio' })
            }).catch(err=>{
                console.log(err)
                commit('setError', err.message)
            })
        },
        detectarUsuario({commit},payload){
            if(payload!=null){
                commit('setUsuario', { email: payload.email, uid: payload.uid })
            }else{
                commit('setUsuario', null)
            }
        },
        cerrarSesion({commit}){
            firebase.auth().signOut()
            commit('setUsuario',null)
            router.push({ name: 'ingreso' })
        }
    },
    getters:{
        existeUsuario(state){
            if(state.usuario ===null||state.usuario===''||state.usuario===undefined){
                return false
            }else{
                return true
            }
        }
    }
})