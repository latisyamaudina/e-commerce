<template>
    <h1 class="mb-8 text-center font-sans text-5xl font-bold mt-5">Categories</h1>
        <div class="grid grid-cols-4 gap-4">
            <div class=" flex flex-container" v-for="kategori in getKategori.data">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img :src="kategori.banner" className="rounded-xl" />
                        </figure>
                            <div className="card-body items-center text-center">
                            <h2 className="card-title">{{ kategori.name }}</h2>
                            <p>{{ kategori.slug }}</p>
                             <div className="card-actions">
                        </div>
                    </div>
                </div>
            </div>
        </div>

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
  import { mapGetters, mapActions } from 'vuex';
  export default {
  computed: {
  ...mapGetters('kategori', ['getKategori']),
  },
  methods: {
  ...mapActions('kategori', ['fetchKategori']),
  },
  created() {
  this.fetchKategori();
  },
  }
  </script>