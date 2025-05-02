<script lang="ts" setup>
useHead({
  title: "Login",
});
definePageMeta({
  layout: "auth",
});

const { loggedIn, user, session, fetch, clear, openInPopup } = useUserSession();
</script>
<template>
  <div>
    Login Page

    <div v-if="loggedIn">
      <h1>Welcome {{ user.name }}!</h1>
      <pre>{{ user }}</pre>
      <p>Logged in since {{ session.loggedInAt }}</p>
      <button class="cursor-pointer text-white font-bold p-4 bg-red-800" @click="clear">Logout</button>
    </div>
    <button v-else class="cursor-pointer text-white font-bold p-4 bg-red-800" @click="openInPopup('/auth/google')">Login with Google</button>

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
