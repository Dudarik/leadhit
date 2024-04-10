<template>
  <Menubar :model="menuitems" />

  <router-view />
</template>
<script lang="ts">
import { defineComponent } from "vue";

import Menubar from "primevue/menubar";

export default defineComponent({
  name: "App",
  components: { Menubar },
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
  position: relative;
  height: 30rem;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem;
}
</style>
