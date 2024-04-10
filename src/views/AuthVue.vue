<template>
  <div class="container">
    <InputText />
    <Button label="submit" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Button from "primevue/button";
import InputText from "primevue/inputtext";

export default defineComponent({
  name: "AuthView",
  components: { InputText, Button },
});
</script>
