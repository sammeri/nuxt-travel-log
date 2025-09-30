<script setup>
const authStore = useAuthStore();
await authStore.init();
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <AppNavBar />
    <main>
      <slot></slot>
    </main>
  </div>
</template>
