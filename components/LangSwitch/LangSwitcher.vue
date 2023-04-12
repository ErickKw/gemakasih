<script setup lang="ts">
const { locales, locale, setLocale } = useI18n();

const language = computed({
  get: () => locale.value,
  set: (value) => {
    setLocale(value);
  },
});
</script>

<template>
  <div>
    <select class="bg-transparent" v-model="language">
      <option
        :value="typeof item === 'object' ? item.code : item"
        v-for="item in locales"
        :key="typeof item === 'object' ? item.code : item">
        {{ typeof item === "object" ? item.name : item }}
      </option>
    </select>
  </div>
</template>
