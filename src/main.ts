import { createApp } from "vue";
import "./styles/main.scss";
import App from "./App.vue";
import vuetify from "./plugins/vuetify.ts";
import "./styles/tailwind.css";

createApp(App).use(vuetify).mount("#app");
