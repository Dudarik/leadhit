<template>
  <Menubar :model="menuitems" />

  <router-view />
  <div class="router_view"></div>
  <PageFooter />
  <Toast />
</template>
<script lang="ts">
import { defineComponent } from "vue";

import Menubar from "primevue/menubar";
import Toast from "primevue/toast";
import PageFooter from "./components/PageFooter.vue";

export default defineComponent({
  name: "App",
  components: { PageFooter, Menubar, Toast },
  data() {
    return {
      menuitems: [
        {
          label: "Авторизация",
          icon: "pi pi-user",
          command: () => {
            this.$router.push("/auth");
          },
        },
        {
          label: "Аналитика",
          icon: "pi pi-chart-line",
          command: () => {
            this.$router.push("/analytic");
          },
        },
      ],
    };
  },
});
</script>
<style lang="scss">
.app {
  display: flex;
  flex-direction: column;
  height: 95vh;
}
.router_view {
  flex: 1;
}
.container {
  padding: 1rem;
}
</style>
