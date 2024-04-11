<template>
  <footer class="footer">
    <a
      v-for="{ title, link, icon } in footerLinks"
      :key="title"
      :href="link"
      target="_blank"
      ><img width="64px" :src="icon" :alt="title"
    /></a>
  </footer>
</template>

<script lang="ts">
import { footerLinks } from "@/db/footerLinks";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      footerLinks,
    };
  },
});
</script>

<style lang="scss">
.footer {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
</style>
