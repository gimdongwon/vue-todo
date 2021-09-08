import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./routes/index";
import store from "./store";

createApp(App, store, router).mount("#app");
