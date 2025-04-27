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
        <NuxtLink class="mx-3 text-cyan-800 font-bold" to="/home">Dashboard</NuxtLink>
        <NuxtLink class="mx-3 text-cyan-800 font-bold" to="/">Logout</NuxtLink>
      </li>
    </ul>
    Orders Page
  </div>
</template>