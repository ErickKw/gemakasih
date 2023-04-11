<script setup>
const localPath = useLocalePath()
// import {ref} from '@vue/reactivity';
let open = ref(false);
let Links = [
  { name: "menu_program", link: "/program" },
  { name: "menu_about", link: "/about" },
  { name: "menu_galery", link: "/galery" },
  { name: "menu_contact", link: "/contact" },
]
</script>
<template lang="">
  <div
    class="bg-white text-gray-200 py-1 px-4 md:flex justify-between items-center container">
    <div class="flex item-center cursor-pointer">
      <a href="#" class="flex items-centepy-2 px-4">
        <!-- <img src="favicon.ico" alt="Logo" class="h-8 w-8 mr-2" /> -->
        <NuxtLink
          :to="localPath('/')"
          class="text-3xl block py-2 font-bold text-primary cursor-pointer"
        >
          {{ $t("website_title") }}
        </NuxtLink>        
      </a>
    </div>


    <div class="block right-6 lg:hidden">
     <button class="flex items-center px-3 py-2 border rounded text-dark border-white hover:text-gray-500 hover:border-gray-500">
       <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><g><path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z"/></g></svg>
     </button>
   </div>

    <ul
      class="md:flex md:items-center md:px-0 px-0 md:pb-0 pb-10 md:static absolute bg-white text-secondary md:w-auto w-full top-14 duration-700 ease-in" :class="[open ? 'left-0' : 'left-[-100%]']"
    >
      <li class="md:mx-4 md:my-0 my-4" v-for="link in Links">
        <NuxtLink
          :to="localPath(link.link)"
          class="text-lg font-bold hover:text-primary"
          >{{ $t(link.name) }}
        </NuxtLink>
      </li>
      <span
        href=""
        class="py-4 px-2 text-xl md:my-0 text-gray-500 font-semibold hover:text-primary transition duration-300"
        ><LangSwitcher />
      </span>
    </ul>
  </div>
</template>
