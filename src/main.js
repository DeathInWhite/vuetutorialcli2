import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

var firebase = require("firebase/app")

require("firebase/auth")
    //require("firebase/database")
    //require("firebase/firestore")
    //require("firebase/messaging")
    //require("firebase/functions")
var config = {
    apiKey: "AIzaSyBKEcJbmyqVMCOwWgQA-fctyvZqNBUvZZM",
    authDomain: "crudfirebase-48438.firebaseapp.com",
    databaseURL: "https://crudfirebase-48438.firebaseio.com",
    projectId: "crudfirebase-48438",
    storageBucket: "crudfirebase-48438.appspot.com",
    messagingSenderId: "111560859791",
    appId: "1:111560859791:web:b0f8fe2e168a6b3dfe90fa",
    measurementId: "G-13MX9LF0MR"
};
// Initialize Firebase
firebase.initializeApp(config);

Vue.config.productionTip = false

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        store.dispatch('detectarUsuario',{email:user.email,uid:user.uid})
    }else{
        store.dispatch('detectarUsuario',null)

    }

    new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount('#app')
})


