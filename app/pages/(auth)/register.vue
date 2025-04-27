<script lang="ts" setup>
useHead({
  title: "Register",
});

definePageMeta({
  layout: "auth",
});
</script>
<template>
  <div>
    Register Page
    <ul>
        <li>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/login">Login</NuxtLink>
        </li>
    </ul>
  </div>
</template>