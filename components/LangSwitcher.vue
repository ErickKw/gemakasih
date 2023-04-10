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
    <select v-model="language">
      <option
        :value="typeof item === 'object' ? item.code : item"
        v-for="item in locales"
        :key="typeof item === 'object' ? item.code : item"
      >
      <!-- <button id="language">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="42.67"
        height="25"
        viewBox="0 0 640 480"
      >
        <path fill="#bd3d44" d="M0 0h640v480H0" />
        <path
          stroke="#fff"
          stroke-width="37"
          d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640"
        />
        <path fill="#192f5d" d="M0 0h364.8v258.5H0" />
        <marker id="flagUs4x30" markerHeight="30" markerWidth="30">
          <path fill="#fff" d="m14 0l9 27L0 10h28L5 27z" />
        </marker>
        <path
          fill="none"
          marker-mid="url(#flagUs4x30)"
          d="m0 0l16 11h61h61h61h61h60L47 37h61h61h60h61L16 63h61h61h61h61h60L47 89h61h61h60h61L16 115h61h61h61h61h60L47 141h61h61h60h61L16 166h61h61h61h61h60L47 192h61h61h60h61L16 218h61h61h61h61h60L0 0"
        />
      </svg>
    </button> -->
        {{ typeof item === "object" ? item.name : item }}
      </option>
    </select>
  </div>
</template>
