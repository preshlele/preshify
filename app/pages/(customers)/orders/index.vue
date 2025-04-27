<script lang="ts" setup>
useHead({
  title: "All Orders",
});

definePageMeta({
  layout: "customers",
});
</script>
<template>
  <div>
     <ul>
      <li>
        <NuxtLink to="/home">Dashboard</NuxtLink>
        <NuxtLink to="/">Logout</NuxtLink>
      </li>
    </ul>
    Orders Page
  </div>
</template>