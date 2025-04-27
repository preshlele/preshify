<script lang="ts" setup>
useHead({
  title: "Dashboard: Admin",
});
definePageMeta({
  layout: "admin",
});
</script>
<template>
  <div>
     <ul>
      <li>
        <NuxtLink to="/">Logout</NuxtLink>
      </li>
    </ul>
    Dashboard page admin
  </div>
</template>