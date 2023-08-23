<template>
    <section class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-xl px-4 md:px-8"> 
    <!-- Heading -->
    <div class="mb-10 md:mb-16">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">All Brand</h2>

      <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg"></p>
    </div>
    <!-- /Heading -->
    <div class="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
      <!-- Article -->
      <div v-for="merk in getMerk.data" :key="merk.id">
      <article class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        <a href="#" class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
          <img :src="merk.logo" />
        </a>

        <div class="flex flex-col gap-2">
          <span class="text-sm text-gray-400">{{ merk.slug }}</span>

          <h2 class="text-xl font-bold text-gray-800">
            <a href="#" class="transition duration-100 hover:text-rose-500 active:text-rose-600">{{ merk.name }}</a>
          </h2>

          <p class="text-gray-500"></p>

          <div>
            <a href="#" class="font-semibold text-rose-500 transition duration-100 hover:text-rose-600 active:text-rose-700">Read more</a>
          </div>
        </div>
      </article>
    </div>
      <!-- /Article -->
      <!-- Article -->
      <article class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        <a href="#" class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
          <img src="https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" loading="lazy" alt="" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div class="flex flex-col gap-2">
          <span class="text-sm text-gray-400">April 2, 2022</span>

          <h2 class="text-xl font-bold text-gray-800">
            <a href="#" class="transition duration-100 hover:text-rose-500 active:text-rose-600">The Coding Mania</a>
          </h2>

          <p class="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo.</p>

          <div>
            <a href="#" class="font-semibold text-rose-500 transition duration-100 hover:text-rose-600 active:text-rose-700">Read more</a>
          </div>
        </div>
      </article>
      <!-- /Article -->
      <!-- Article -->
      <article class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        <a href="#" class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
          <img src="https://images.unsplash.com/photo-1496395031280-4201b0e022ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" loading="lazy" alt="" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div class="flex flex-col gap-2">
          <span class="text-sm text-gray-400">April 2, 2022</span>

          <h2 class="text-xl font-bold text-gray-800">
            <a href="#" class="transition duration-100 hover:text-rose-500 active:text-rose-600">Architectural Warfare</a>
          </h2>

          <p class="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo.</p>

          <div>
            <a href="#" class="font-semibold text-rose-500 transition duration-100 hover:text-rose-600 active:text-rose-700">Read more</a>
          </div>
        </div>
      </article>
      <!-- /Article -->
      <!-- Article -->
      <article class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        <a href="#" class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
          <img src="https://images.unsplash.com/photo-1510081887155-56fe96846e71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80" loading="lazy" alt="" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div class="flex flex-col gap-2">
          <span class="text-sm text-gray-400">April 2, 2022</span>

          <h2 class="text-xl font-bold text-gray-800">
            <a href="#" class="transition duration-100 hover:text-rose-500 active:text-rose-600">Blues in Architechture</a>
          </h2>

          <p class="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo.</p>

          <div>
            <a href="#" class="font-semibold text-rose-500 transition duration-100 hover:text-rose-600 active:text-rose-700">Read more</a>
          </div>
        </div>
      </article>
      <!-- /Article -->
    </div>
  </div>
</section>

<footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
                <img src="../assets/logooo.jpg" class="h-8 mr-3" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Jewrls</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
    </div>
</footer>

</template>

<script>
import { mapGetters,mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('merk', ['getMerk']),
    },
    methods: {
        ...mapActions('merk', ['fetchMerk']),
    },
    created() {
        this.fetchMerk();
    },
}
</script>