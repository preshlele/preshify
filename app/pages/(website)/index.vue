<script lang="ts" setup>
useHead({
  title: "Welcome",
});

definePageMeta({
  layout: "website",
});
</script>
<template>
  <div>
    <ul>
        <li>
            <NuxtLink to="/products">All Products</NuxtLink>
            <NuxtLink to="/login">Login</NuxtLink>
        </li>
    </ul>
    Landing Page
  </div>
</template>