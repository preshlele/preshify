<script lang="ts" setup>
useHead({
  title: "Dashboard",
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
