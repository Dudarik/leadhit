<template>
  <div class="container">
    <h1 class="logo"><span class="logo_first_part">Lead</span>Hit</h1>
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

import {
  API_URL,
  API_KEY,
  RESPONSE_STATUS_OK,
  TOAST_LIFE_TIME,
} from "@/config";
const SITE_ID_LENGTH = 24;

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
    async onSubmit() {
      if (this.siteId.length !== SITE_ID_LENGTH) {
        this.isInputError = true;
        return;
      }

      try {
        const response = await fetch(API_URL, {
          headers: {
            "Api-Key": API_KEY,
            "Leadhit-Site-Id": this.siteId,
          },
        });
        if (response.status !== RESPONSE_STATUS_OK)
          throw new Error(
            `${response.status}: Не удалось получить данные с сервера`
          );
        const { message } = await response.json();

        if (message === "ok") {
          localStorage.setItem("leadhit-site-id", this.siteId);
          this.$router.push("/analytic");
        }
      } catch (error) {
        const e = error as Error;
        console.error(error);
        this.$toast.add({
          severity: "error",
          summary: "Ошибка",
          detail: e.message,
          life: TOAST_LIFE_TIME,
        });
      }
    },
    onInputSiteId() {
      this.isInputError = false;
    },
  },
});
</script>
<style scoped lang="scss">
.logo {
  position: relative;
  width: 8rem;
  .logo_first_part {
    color: #ff4402;
  }
  &::before {
    content: "";
    position: absolute;
    background-image: url("../assets/angle.png");
    width: 33px;
    height: 39px;
    right: -1rem;
    top: -1rem;
  }
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
