<script setup lang="ts">
import { NConfigProvider, GlobalThemeOverrides } from 'naive-ui';
import { RouterLink, RouterView } from 'vue-router'
const themeOverride: GlobalThemeOverrides = {
  Button: {
    textColor: "#fff",
    textColorHover: "#fff",
    borderHover: "0px",
    textColorFocus: "#fff",
    borderFocus: "0px",
    textColorPressed: "#fff",
    borderPressed: "0px",
    border: "0px",
    rippleColor: "transparent"
  },

}
</script>

<template>
  <n-config-provider :theme-overrides="themeOverride">
    <Suspense>
      <RouterView />
    </Suspense>
  </n-config-provider>
</template>

