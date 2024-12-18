<template>
    <div id="contact" class="container mx-auto px-4 sm:px-10 mb-5 ">
        <!-- Title Section -->
        <div class="text-center mb-10">
            <span class="text-blue-500 text-lg font-semibold">Be The First To Know</span>
            <h2 class="text-2xl sm:text-4xl font-bold text-gray-800 mt-2">
                Grow Your Brand Presence on Social Media
            </h2>
        </div>

        <!-- Contact and Subscribe Section -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 ">
            <!-- Contact Form -->
            <div>
                <n-card class="bg-gray-100 rounded-md p-8">
                    <div class=" mb-6">
                        <span class="text-blue-500 text-lg font-semibold">Contact</span>
                        <h3 class="text-xl font-bold text-gray-800">Write Message</h3>
                    </div>
                    <form id="contactForm" novalidate="true" class="space-y-4">
                        <n-input type="text" v-model="contactForm.name" placeholder="Your name" class="w-full h-16"
                            required />
                        <n-input type="email" v-model="contactForm.email" placeholder="Email Address"
                            class="w-full h-16 " required />
                        <n-input type="textarea" v-model="contactForm.message" placeholder="Message" rows="6"
                            class="w-full h-55" required />

                        <n-button type="submit" block size="large"
                            class="bg-blue-500 border border-blue-500 text-white hover:bg-blue-600 h-12">
                            Send Message
                        </n-button>
                    </form>
                </n-card>
            </div>

            <!-- Subscribe Form -->
            <div>
                <n-card class="bg-gray-100 rounded-md p-8">
                    <div class=" mb-3 ">
                        <span class="text-blue-500 text-lg font-semibold">Subscribe</span>
                        <h3 class="text-xl font-bold text-gray-800">Our Newsletter</h3>
                    </div>
                    <div class="mb-6">
                        <img src="../assets/images/newsletter-img.png" alt="Newsletter" class="w-full h-auto" />
                    </div>
                    <form class="space-y-4">
                        <n-input type="email" v-model="subscribeForm.email" placeholder="Your Email" class="w-full h-10"
                            required />
                        <n-button type="submit" block size="large"
                            class="bg-blue-500 border-1 border-blue-500  text-white hover:bg-blue-600 h-12">
                            Subscribe
                        </n-button>
                    </form>
                </n-card>
            </div>
        </div>
    </div>
</template>

<script>
import { NInput, NButton, NCard } from 'naive-ui';

export default {
    components: {
        NInput,

        NButton,
        NCard,
    },
    data() {
        return {
            contactForm: {
                name: "",
                email: "",
                message: "",
            },
            subscribeForm: {
                email: "",
            },
        };
    },
};
</script>
