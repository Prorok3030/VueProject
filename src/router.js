import { createRouter, createWebHashHistory } from 'vue-router';
import MainPage from "./components/MainPage.vue";
import ToDo from "./components/ToDo.vue";
import About from "./components/About.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/home', component: MainPage, alias: '/'},
        { path: '/todo', component: ToDo},
        { path: '/about', component: About},
    ]
})