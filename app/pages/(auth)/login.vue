<script lang="ts" setup>
useHead({
  title: "Login",
});
definePageMeta({
  layout: "auth",
});
</script>
<template>
  <div>
    Login Page
    <ul>
        <li>
            <NuxtLink to="/register">Register</NuxtLink>
            <NuxtLink to="/password/forgot">Forgot Password?</NuxtLink>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/admin/home">Admin Dashboard</NuxtLink>
            <NuxtLink to="/home">Customer Dashboard</NuxtLink>
        </li>
    </ul>
  </div>
</template>