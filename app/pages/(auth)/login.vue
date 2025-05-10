<script lang="ts" setup>
useHead({
  title: "Login",
});

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import AuthLayout from "~/components/AuthLayout.vue";
import { NuxtLink } from "#components";

const formData = ref({
  email: "",
  password: "",
});

const showPassword = ref(false);

const handleLogin = () => {
  console.log(formData.value, "register data");
};
</script>

<template>
  <AuthLayout title="Welcome back! Please sign in to continue.">
    <div class="rounded-xl shadow-sm border border-gray-100 p-8 bg-white">
      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label
            for="email"
            class="block text-sm font-medium text-gray-700 mb-1"
            >Email</label
          >
          <Input
            id="email"
            v-model="formData.email"
            type="email"
            required
            class="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <div class="flex justify-between items-center mb-1">
            <label
              for="password"
              class="block text-sm font-medium text-gray-700"
              >Password</label
            >
            <NuxtLink
              to="/password/forgot"
              class="text-sm text-emerald-600 hover:text-emerald-800"
            >
              Forgot password?
            </NuxtLink>
          </div>
          <div class="relative">
            <Input
              id="password"
              v-model="formData.password"
              :type="showPassword ? 'text' : 'password'"
              required
              class="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
              placeholder="••••••••"
            />
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <span v-if="showPassword">Hide</span>
              <span v-else>Show</span>
            </button>
          </div>
        </div>

        <Button
          type="submit"
          class="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-md transition-colors font-medium"
        >
          Sign in
        </Button>

        <div class="text-center mt-3">
          <p class="text-gray-600 text-sm">
            Don't have an account?
            <NuxtLink
              to="/register"
              class="font-medium text-emerald-600 hover:text-emerald-800"
            >
              Sign up
            </NuxtLink>
          </p>
        </div>
      </form>
    </div>
  </AuthLayout>
</template>
