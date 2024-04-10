<template>
  <Menubar :model="menuitems" />

  <router-view />
  <div class="router_view"></div>
  <footer class="footer">
    <a href="https://github.com/Dudarik/leadhit"
      ><img width="64px" src="./assets/github_icon.png"
    /></a>
    <a href="https://t.me/@AlWh45"
      ><img width="64px" src="./assets/telegram_icon.png"
    /></a>
    <a href="https://kurgan.hh.ru/resume/f715c1d3ff0bed63350039ed1f413130356549"
      ><img width="64px" src="./assets/hh_icon.png"
    /></a>
  </footer>
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
.app {
  display: flex;
  flex-direction: column;
  height: 95vh;
  .footer {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
}
.router_view {
  flex: 1;
}
.container {
  padding: 1rem;
}
</style>
