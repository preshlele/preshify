<script lang="ts" setup>
import { useField, useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";

import { loginSchema } from "~~/schemas/common/auth";

const { isSubmitting, handleSubmit, errors, defineField } = useForm({
  validationSchema: toTypedSchema(loginSchema),
});

const onSubmit = handleSubmit(async (values) => {
  console.log(values, "this is the form submission values");

  try {
    const res = await $fetch("/api/auth/login", {
      method: "POST",
      body: { ...values },
    });
    console.log(res);
  } catch (e) {
    console.log(JSON.stringify(e.message), "this ise eeeee");
  }
});

const [email, emailAttrs] = defineField("email");
const [password, passwordAttrs] = defineField("password");
</script>
<template>
  <form @submit.prevent="onSubmit" class="space-y-4 max-w-md mx-auto mt-10">
    <div>
      <label>Email</label>

      <input
        v-model="email"
        v-bind="emailAttrs"
        type="email"
        placeholder="example@exapmle.com"
        class="w-full border px-3 py-2 rounded"
      />
      <p v-if="errors?.email" class="text-red-500">
        {{ errors.email }}
      </p>
    </div>

    <div>
      <label>Password</label>
      <input
        v-model="password"
        v-bind="passwordAttrs"
        type="password"
        placeholder="Enter a valid password"
        class="w-full border px-3 py-2 rounded"
      />
      <p v-if="errors?.password" class="text-red-500">
        {{ errors.password }}
      </p>
    </div>

    <button
      :disabled="isSubmitting"
      class="cursor-pointer w-full bg-red-800 text-white py-2 rounded"
      type="submit"
    >
      {{ isSubmitting ? "Logging in..." : "Login" }}
    </button>
  </form>
</template>
