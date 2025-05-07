<script lang="ts" setup>
useHead({
  title: "Dashboard",
});

definePageMeta({
  layout: "customers",
  middleware: 'auth'
});
</script>
<template>
  <div>
    <ul>
      <li>
        <NuxtLink class="mx-3 text-cyan-800 font-bold" to="/orders">Orders</NuxtLink>
        <NuxtLink class="mx-3 text-cyan-800 font-bold" to="/">Logout</NuxtLink>
      </li>
    </ul>
    Dashboard Page
  </div>
</template>
