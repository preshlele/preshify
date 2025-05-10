<script lang="ts" setup>
defineProps<{
  title: string;
}>();
</script>

<template>
  <div
    class="min-h-screen w-full flex items-center justify-center bg-gray-50 px-4"
  >
    <div class="max-w-md w-full">
      <div class="text-center mb-6">
        <h1 class="text-3xl font-bold text-gray-900">store</h1>
        <p class="mt-2 text-gray-600">{{ title }}</p>
      </div>
      <slot></slot>
    </div>
  </div>
</template>
