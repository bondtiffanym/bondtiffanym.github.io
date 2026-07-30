import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
import "../styles/layers.css"; // Vuetify + layer order (includes vuetify/styles)
import "../styles/settings.scss";

export default createVuetify({
  components,
  directives,
});
