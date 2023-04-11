<script setup>
const localPath = useLocalePath();
</script>

<template>
 <button class="transition ease-out duration-300 text-base font-semibold bg-primary py-3 px-8 rounded-full hover:shadow-md hover:opacity-70 hover:text-slate-500">
  <slot></slot>
 </button>
</template>
