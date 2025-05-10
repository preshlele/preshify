<script lang="ts" setup>
import AuthLayout from "~/components/AuthLayout.vue";
import Button from "~/components/ui/button/Button.vue";
import Input from "~/components/ui/input/Input.vue";

useHead({
  title: "Register",
});

const formData = ref({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const showPassword = ref(false);

const handleRegister = () => {
  // Perform registration logic here
  console.log(formData.value, "register data");
};

</script>

<template>
  <AuthLayout title="Create an account to start shopping.">
    <div class="rounded-xl shadow-sm border border-gray-100 p-8">
      <form @submit.prevent="handleRegister" class="space-y-4">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label
              for="firstName"
              class="block text-sm font-medium text-gray-700 mb-1"
              >First name</label
            >
            <Input
              id="firstName"
              v-model="formData.firstName"
              type="text"
              required
              class="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
              placeholder="John"
              />
            </div>
            
            <div>
              <label
              for="lastName"
              class="block text-sm font-medium text-gray-700 mb-1"
              >Last name</label
              >
            <Input
              id="lastName"
              v-model="formData.lastName"
              type="text"
              required
              class="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
              placeholder="Doe"
              />
            </div>
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
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
            <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
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
          <div>
            <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-1">Confirm password</label>
            <Input
              id="confirmPassword"
              v-model="formData.confirmPassword"
              type="password"
              required
              class="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
              placeholder="••••••••"
            />
          </div>
          <div class="flex items-start">
            <div class="flex items-center h-5">
              <Input
                id="terms"
                type="checkbox"
                required
                class="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
              />
            </div>
            <div class="ml-3 text-sm">
              <label for="terms" class="text-gray-700">
                I agree to the
                <a href="#" class="text-emerald-600 hover:text-emerald-800">Terms</a>
                and
                <a href="#" class="text-emerald-600 hover:text-emerald-800">Privacy Policy</a>
              </label>
            </div>
          </div>

        <Button
            type="submit"
            class="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-md transition-colors font-medium"
          >
            Create account
          </Button>
          <div class="text-center mt-3">
          <p class="text-gray-600 text-sm">
            Already have an account?
            <NuxtLink
              to="/login"
              class="font-medium text-emerald-600 hover:text-emerald-800"
            >
              Sign in
            </NuxtLink>
          </p>
        </div>
      </form>
    </div>
  </AuthLayout>
</template>
