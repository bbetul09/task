<template>
    <div class="container mx-auto px-4 py-6 sm:px-10 mb-8">
  
      <div class="text-center mb-10 ">
        <span class="text-blue-500 text-lg font-semibold">Price Table</span>
        <h2 class="text-2xl sm:text-4xl font-bold text-gray-800 mt-2 py-4">
          No Hidden Charge Applied, Choose Your Plan
        </h2>
      </div>
  

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(plan, index) in plans"
          :key="plan.name"
          :class="[
            'p-6 rounded-lg shadow-lg text-center py-16 mx-10',
            index === 1 ? 'bg-blue-500 text-white' : 'bg-white',
          ]"
        >
          <n-card class="mx-10">
            <div class="text-center ">
              <h3 :class="['text-xl font-bold', index === 1 ? 'text-white' : 'text-gray-800']">
                {{ plan.name }}
              </h3>
              <h1 class="text-4xl font-extrabold my-4" :class="index === 1 ? 'text-white' : 'text-blue-500'">
                {{ plan.price }}
              </h1>
             
            </div>
            <ul class="mt-6 space-y-2 text-center">
              <li
                v-for="(feature, i) in plan.features"
                :key="i"
                class="flex items-center justify-center"
              >
                <i :class="['flaticon-check mr-2', index === 1 ? 'text-white' : 'text-green-500']"></i>
                <span :class="index === 1 ? 'text-white' : 'text-gray-600'">-{{ feature }}</span>
              </li>
            </ul>
            <div class="mt-6 text-center p-4">
              <n-button
                class="w-full cursor-pointer btn-primary font-semibold px-4 sm:px-6 py-2 sm:py-3 mt-4 sm:mt-8 rounded"
                :class="index === 1 ? 'bg-white text-blue-500 hover:bg-gray-200' : 'bg-blue-500 text-white hover:bg-blue-600'"
              >
                Get Started
              </n-button>
            </div>
          </n-card>
        </div>
      </div>
    </div>
  </template>
  
 <script setup>
import { ref } from 'vue';
const plans = ref([
  {
    name: "Standard",
    price: "$49",
    features: [
      "Military Grade Server Protection",
      "All Dashboard Features",
      "API And Webhook Access",
    ],
  },
  {
    name: "Premium",
    price: "$249",
    features: [
      "8 Team Members",
      "Custom Analytics Filters",
      "API And Webhook Access",
    ],
  },
  {
    name: "Professional",
    price: "$99",
    features: [
      "Military Grade Server Protection",
      "All Dashboard Features",
      "API And Webhook Access",
    ],
  },
]);
</script>
  
 
  