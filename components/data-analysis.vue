<template>
    <div class="data-analysis bg-gray-100 py-0">
      <div class="container mx-auto px-10">
        <div class="flex flex-wrap items-center">
          <div class="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div class="data-img">
              <img src="../assets/images/data-img-1.png" alt="Image" class="w-full h-auto rounded-lg ">
            </div>
          </div>
  
          <div class="w-full lg:w-1/2">
            <div class="sass-data-content space-y-6">
              <div class="data-section-title">
                <span class="text-blue-500 text-sm font-medium">Data Analysis</span>
                <h2 class="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-800 py-4">
                  The Most Reliable Cloud <br> Management Software
                </h2>
                <p class="text-gray-600 text-sm sm:text-base py-4">
                  Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean
                  faucibus nibh et justo cursus id rutrum lore imperdiet. Nunc ut sem vitae risus tristique posuere.
                </p>
              </div>
  
              <div class="data-list">
                <ul class="space-y-4">
                  <li data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" class="flex items-center space-x-4">
                    <div class=" bg-blue-100 text-blue-500 p-3 rounded-full">
                    </div>
                    <span class="text-gray-800 font-medium">Unlimited Design Possibility</span>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400" class="flex items-center space-x-4">
                    <div class=" bg-blue-100 text-blue-500 p-3 rounded-full">       
                    </div>
                    <span class="text-gray-800 font-medium">Beautiful Mobile Apps</span>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600" class="flex items-center space-x-4">
                    <div class=" bg-blue-100 text-blue-500 p-3 rounded-full">
                    </div>
                    <span class="text-gray-800 font-medium">Easy Project Management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "DataAnalysis",
  };
  </script>
  
  <style scoped>
  .data-analysis {
    background-color: #f9fafb;
  }
  </style>
  