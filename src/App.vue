<template>
  <Menubar :model="menuitems" />

  <router-view />
  <Toast />
</template>
<script lang="ts">
import { defineComponent } from "vue";

import Menubar from "primevue/menubar";
import Toast from "primevue/toast";

export default defineComponent({
  name: "App",
  components: { Menubar, Toast },
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
.container {
  padding: 1rem;
}
</style>
