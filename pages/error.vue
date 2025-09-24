<script lang="ts" setup>
const route = useRoute();
const error = route.query.error || "Произошла неизвестная ошибка";
</script>

<template>
  <div class="card bg-base-300 container mt-4 min-h-72 text-center mx-auto flex flex-col justify-center items-center gap-4">
    <div role="alert" class="alert alert-error alert-outline min-w-1/2 text-center">
      <span>Ууупс! {{ error }}</span>
    </div>
    <NuxtLink to="/" class="btn btn-primary">
      Домашняя страница
      <Icon name="tabler:home" size="32" />
    </NuxtLink>
  </div>
</template>

<style>

</style>
