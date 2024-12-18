<template>
    <n-space vertical size="large">
        <n-layout>
       
            <n-layout-header >
                <div class="flex items-center justify-between px-8 py-4 shadow-lg ">
                    <div class=" tracking-wide">
                        <a href="#">
                            <img src="../assets/images/mala-logo.png" alt="Mala Logo" class="h-8">
                        </a>

                    </div>
                    <nav class="hidden md:flex space-x-6 ">
                        <a href="#home"
                            class=" text-xl text-gray-600 hover:text-gray-800 transition-colors duration-300">Home</a>
                        <a href="#about"
                            class="text-xl text-gray-600 hover:text-gray-800 transition-colors duration-300">About</a>
                        <a href="#projects"
                            class="text-xl text-gray-600 hover:text-gray-800 transition-colors duration-300">Projects</a>
                        <a href="#services"
                            class="text-xl text-gray-600 hover:text-gray-800 transition-colors duration-300">Services</a>
                        <a href="#contact"
                            class="text-xl text-gray-600 hover:text-gray-800 transition-colors duration-300">Contact</a>
                    </nav>
                    <button
                        class=" text-xl hidden md:block bg-gradient-to-r from-blue-500 to-green-500 text-white py-2 px-4 sm:px-6 rounded-lg hover:opacity-90">
                        Get Started
                    </button>
                    <div class="block md:hidden cursor-pointer" @click="toggleMobileMenu">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-8 h-8 text-gray-800">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5" />
                        </svg>
                    </div>
                </div>
                <div v-if="showMobileMenu" class="md:hidden  shadow-md px-6 py-4 space-y-4">
                    <a href="#home"
                        class="block text-gray-600 hover:text-gray-800 transition-colors duration-300">Home</a>
                    <a href="#about"
                        class="block text-gray-600 hover:text-gray-800 transition-colors duration-300">About</a>
                    <a href="#projects"
                        class="block text-gray-600 hover:text-gray-800 transition-colors duration-300">Projects</a>
                    <a href="#services"
                        class="block text-gray-600 hover:text-gray-800 transition-colors duration-300">Services</a>
                    <a href="#contact"
                        class="block text-gray-600 hover:text-gray-800 transition-colors duration-300">Contact</a>
                    <button
                        class="w-full px-6 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg hover:opacity-90 transition-all duration-300">
                        Get Started
                    </button>
                </div>
            </n-layout-header>
            <div class="page-body">
                <slot></slot>
            </div>


         
            <n-layout-footer class="footer">
                <div class="bg-gray-800 text-white py-8 sm:py-12">
                    <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
                        <div>
                            <h3 class="text-lg font-bold mb-4">About Mala</h3>
                            <p class="text-gray-400 text-sm">
                                Mala is a professional business and portfolio template built for modern businesses.
                            </p>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold mb-4">Quick Links</h3>
                            <ul class="space-y-2">
                                <li><a href="#" class="text-gray-400 hover:text-white ">Home</a></li>
                                <li><a href="#" class="text-gray-400 hover:text-white">About</a></li>
                                <li><a href="#" class="text-gray-400 hover:text-white">Services</a></li>
                                <li><a href="#" class="text-gray-400 hover:text-white">Portfolio</a></li>
                                <li><a href="#" class="text-gray-400 hover:text-white">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold mb-4">Services</h3>
                            <ul class="space-y-2">
                                <li><a href="#" class="text-gray-400 hover:text-white">Web Design</a></li>
                                <li><a href="#" class="text-gray-400 hover:text-white">SEO</a></li>
                                <li><a href="#" class="text-gray-400 hover:text-white">Marketing</a></li>
                                <li><a href="#" class="text-gray-400 hover:text-white">Branding</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold mb-4">Contact Us</h3>
                            <p class="text-gray-400 text-sm">
                                123 Main Street,<br />
                                City Name, Country<br />
                                Phone: +1 123 456 7890<br />
                                Email: contact@mala.com
                            </p>
                        </div>
                    </div>
                    <div class="text-center mt-8 text-gray-500 text-sm">
                        &copy; 2024 Mala. All Rights Reserved.
                    </div>
                </div>
            </n-layout-footer>
        </n-layout>
    </n-space>
</template>

<script setup>
import { ref } from 'vue';
import { NLayout, NLayoutHeader, NLayoutFooter, NLayoutContent, NIcon } from 'naive-ui';

const showMobileMenu = ref(false)

const toggleMobileMenu = () => {
    showMobileMenu.value = !showMobileMenu.value
}
</script>

<style scoped>
.navbar {
    background: linear-gradient(to right, #ffffff, #f8f8f8);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.footer {
    background: #1a202c;
}
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px;
}
</style>