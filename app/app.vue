<template>
  <div id="app" class="min-h-screen flex flex-col bg-gray-100">
    <!-- Header Section -->
    <header class="bg-gray-800 text-white py-4">
      <div class="container mx-auto flex justify-between items-center px-4">
        <h1 class="text-xl font-bold">My Awesome App</h1>
        <nav>
          <ul class="flex space-x-6">
            <li><a href="#features" class="hover:underline">Features</a></li>
            <li><a href="#about" class="hover:underline">About</a></li>
            <li><a href="#contact" class="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- Hero Section -->
    <section
      class="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-20 text-center"
    >
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold mb-4">Welcome to My Awesome App</h2>
        <p class="text-lg mb-8">
          Your solution to all problems, simplified and elegant.
        </p>
        <a
          href="#features"
          class="inline-block bg-white text-gray-800 font-bold py-3 px-6 rounded-full hover:bg-gray-200 transition duration-300"
        >
          Get Started
        </a>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-16 bg-gray-100">
      <div class="container mx-auto px-4 text-center">
        <h3 class="text-3xl font-bold mb-12">Why Choose Us?</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h4 class="text-xl font-semibold mb-4">Fast & Reliable</h4>
            <p class="text-gray-600">
              Our app is built to perform efficiently under any condition.
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h4 class="text-xl font-semibold mb-4">User-Friendly</h4>
            <p class="text-gray-600">
              Intuitive design ensures anyone can use it without hassle.
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h4 class="text-xl font-semibold mb-4">Secure</h4>
            <p class="text-gray-600">
              Your data is safe with us. We prioritize security.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="bg-gray-800 text-white py-6 mt-auto">
      <div class="container mx-auto text-center">
        <p>&copy; 2023 My Awesome App. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>
