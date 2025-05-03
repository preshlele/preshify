<script lang="ts" setup>
useHead({
  title: "Email Verified",
});

definePageMeta({
  layout: "auth",
  middleware: "auth",
});
</script>
<template>
  <div>Email Verified Page</div>
</template>
