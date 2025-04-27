<script lang="ts" setup>
useHead({
  title: "Dashboard",
});

definePageMeta({
  layout: "customers",
});
</script>
<template>
  <div>
    <ul>
      <li>
        <NuxtLink to="/orders">Orders</NuxtLink>
        <NuxtLink to="/">Logout</NuxtLink>
      </li>
    </ul>
    Dashboard Page
  </div>
</template>
