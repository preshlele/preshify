<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk: string) => {
    return titleChunk ? `${titleChunk} - Preshify` : "Preshify";
  },
});
</script>
<template>
  <main>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </main>
</template>
