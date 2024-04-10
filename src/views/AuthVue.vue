<template>
  <div class="container">
    <h1><span class="logo_first_part">Lead</span>Hit</h1>
    <form class="login_form">
      <div class="form_input">
        <FloatLabel>
          <label for="site_id">ID сайта: </label>
          <InputText
            :style="{ width: '16rem' }"
            id="site_id"
            v-model="siteId"
            @update:modelValue="onInputSiteId"
          />
        </FloatLabel>
        <Button label="Войти" @click="onSubmit" />
      </div>
      <small class="form_error" :class="{ dn: !isInputError }"
        >id сайта должен содержать 24 символа</small
      >
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Button from "primevue/button";
import InputText from "primevue/inputtext";
import FloatLabel from "primevue/floatlabel";

export default defineComponent({
  name: "AuthView",
  components: { InputText, Button, FloatLabel },
  data() {
    return {
      siteId: "",
      isInputError: false,
    };
  },
  methods: {
    onSubmit() {
      if (this.siteId.length !== 24) {
        this.isInputError = true;
        return;
      }
    },
    onInputSiteId() {
      this.isInputError = false;
    },
  },
});
</script>
<style scoped lang="scss">
.logo_first_part {
  color: #ff4402;
}
.login_form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 0.5rem;
  .form_input {
    display: flex;
    gap: 1rem;
  }
  .dn {
    opacity: 0;
    transition: all 0.5s;
  }
  .form_error {
    display: flex;
    justify-content: start;
    color: #ff4402;
    font-size: 0.7rem;
    transition: all 0.5s;
  }
}
</style>
