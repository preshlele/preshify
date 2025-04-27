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
            <NuxtLink class="mx-3 text-cyan-800 font-bold" to="/register">Register</NuxtLink>
            <NuxtLink class="mx-3 text-cyan-800 font-bold" to="/password/forgot">Forgot Password?</NuxtLink>
            <NuxtLink class="mx-3 text-cyan-800 font-bold" to="/">Home</NuxtLink>
            <NuxtLink class="mx-3 text-cyan-800 font-bold" to="/admin/home">Admin Dashboard</NuxtLink>
            <NuxtLink class="mx-3 text-cyan-800 font-bold" to="/home">Customer Dashboard</NuxtLink>
        </li>
    </ul>
  </div>
</template>