<template>
    <div id="contact" class="container mx-auto px-4 sm:px-10 mb-5">
      <div class="text-center mb-10">
        <span class="text-blue-500 text-lg font-semibold">Be The First To Know</span>
        <h2 class="text-2xl sm:text-4xl font-bold text-gray-800 mt-2">
          Grow Your Brand Presence on Social Media
        </h2>
      </div>
  
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 px-8">
        <div>
          <n-card class="bg-gray-100 rounded-md p-8">
            <div class="mb-6">
              <span class="text-blue-500 text-lg font-semibold">Contact</span>
              <h3 class="text-xl font-bold text-gray-800">Write Message</h3>
            </div>
            <form id="contactForm" novalidate class="space-y-4" @submit.prevent="handleContactFormSubmit">
              <n-input 
                type="text" 
                v-model="contactForm.name" 
                placeholder="Your name" 
                class="w-full h-16" 
                required
              />
              <n-input 
                type="email" 
                v-model="contactForm.email" 
                placeholder="Email Address" 
                class="w-full h-16" 
                required
              />
              <n-input 
                type="textarea" 
                v-model="contactForm.message" 
                placeholder="Message" 
                rows="6" 
                class="w-full h-55" 
                required
              />
  
              <n-button 
                type="submit" 
                block 
                size="large" 
                class="bg-blue-500 border border-blue-500 text-white hover:bg-blue-600 h-12">
                Send Message
              </n-button>
            </form>
          </n-card>
        </div>
  
        <div>
          <n-card class="bg-gray-100 rounded-md p-8">
            <div class="mb-3">
              <span class="text-blue-500 text-lg font-semibold">Subscribe</span>
              <h3 class="text-xl font-bold text-gray-800">Our Newsletter</h3>
            </div>
            <div class="mb-6">
              <img src="../assets/images/newsletter-img.png" alt="Newsletter" class="w-full h-auto" />
            </div>
            <form class="space-y-4" @submit.prevent="handleSubscribeFormSubmit">
              <n-input 
                type="email" 
                v-model="subscribeForm.email" 
                placeholder="Your Email" 
                class="w-full h-10" 
                required
              />
              <n-button 
                type="submit" 
                block 
                size="large" 
                class="bg-blue-500 border border-blue-500 text-white hover:bg-blue-600 h-12">
                Subscribe
              </n-button>
            </form>
          </n-card>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { NCard, NInput, NButton } from 'naive-ui';
  
  const contactForm = ref({
    name: '',
    email: '',
    message: ''
  });
  
  const subscribeForm = ref({
    email: ''
  });
  
  const handleContactFormSubmit = () => {
    console.log('Contact Form Submitted:', contactForm.value);
   
  };
  
  const handleSubscribeFormSubmit = () => {
    console.log('Subscribe Form Submitted:', subscribeForm.value);
   
  };
  </script>
  
  
  