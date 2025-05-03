<script lang="ts" setup>
import Form from '~/components/auth/login/form.vue';

useHead({
  title: "Login",
});
definePageMeta({
  layout: "auth",
});

const { loggedIn, user, session, fetch, clear, openInPopup} = useUserSession();
</script>
<template>
  <div>
    Login Page
    <a
      class="cursor-pointer text-white font-bold p-4 bg-red-800"
      href="/auth/google"
    >
      Let's google
    </a>
    <Form />
    <ul>
      <li>
        <NuxtLink class="mx-3 text-cyan-800 font-bold" to="/register"
          >Register</NuxtLink
        >
        <NuxtLink class="mx-3 text-cyan-800 font-bold" to="/password/forgot"
          >Forgot Password?</NuxtLink
        >
        <NuxtLink class="mx-3 text-cyan-800 font-bold" to="/">Home</NuxtLink>
        <NuxtLink class="mx-3 text-cyan-800 font-bold" to="/admin/home"
          >Admin Dashboard</NuxtLink
        >
        <NuxtLink class="mx-3 text-cyan-800 font-bold" to="/home"
          >Customer Dashboard</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>
