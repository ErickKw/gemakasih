<script setup>
const localPath = useLocalePath();
</script>
<template>
  <div
    class="flex justify-beetween items-center h-24 px-4 mx-auto max-w-[1240px]"
  >
    <NuxtLink :to="localPath('/')"
      class="w-full text-3xl font-bold text-primary">
      {{$t("website_title")}}
    </NuxtLink>
    <ul class="flex">
      <li class="p-4">Home</li>
      <li class="p-4">{{ $t("menu_about") }}</li>
      <li class="p-4">{{ $t("menu_program") }}</li>
      <li class="p-4">{{ $t("menu_contact") }}</li>
      <li class="p-4">{{ $t("menu_galery") }}</li>
      <li class="p-4">
        <LangSwitcher />
      </li>
    </ul>
    <button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M21 7H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm0 4H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm0 4H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm0 4H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2z"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "UimAlignJustify",
};
</script>
