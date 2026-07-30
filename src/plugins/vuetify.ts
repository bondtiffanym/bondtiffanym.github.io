import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
import "../styles/layers.css"; // 1. Import layer definitions
import "../styles/settings.scss"; // 2. Import utility overrides
import "vuetify/styles";

export default createVuetify({
  components,
  directives,
});
