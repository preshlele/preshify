<script lang="ts" setup>
useHead({
  title: "Dashboard: Admin",
});
definePageMeta({
  layout: "admin",
  middleware: "auth",
});
</script>
<template>
  <div>
    <ul>
      <li>
        <NuxtLink class="mx-3 text-cyan-800 font-bold" to="/">Logout</NuxtLink>
      </li>
    </ul>
    Dashboard page admin
  </div>
</template>
