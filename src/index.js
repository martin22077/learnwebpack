import './style.scss';

import { createApp } from 'vue';

import * as VueRouter from 'vue-router';

import App from './App.vue';

import ToDoList from './pages/ToDoList.vue';

import Modals from './pages/Modals.vue';

const routes = [
    {path: '/', component: Modals, name: 'home'},
    {path: '/todolist', component: ToDoList, name: 'ToDoList'},
]
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, 
  })


let app =createApp(App);
app.use(router);

app.mount('#app');