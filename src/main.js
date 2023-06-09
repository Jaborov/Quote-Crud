import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router/router";
import store from "./store/store";
import "bootstrap/dist/js/bootstrap";




createApp(App).use(store).use(router).mount("#app");


