<script setup lang="ts">
import { NuxtPage } from "~/.nuxt/components";

const localPath = useLocalePath();
</script>

<template>
  <div>
    <section id="home">
      <div class="container">
        <div class="flex flex-wrap">
          <div class="w-full self-center px-4 lg:w-1/2">
            <h1 class="text-base font-bold text-primary md:text-xl lg:text-2xl">
              {{ $t("hero_section_welcome") }}
              <span class="block font-bold text-dark text-4xl mt-1 lg:text-5xl"
                >{{$t("website_title")}}</span
              >
            </h1>
            <h2 class="font-medium text-slate-500 text-lg mb-5 lg:text-2xl">
              {{ $t("hero_section_tagline") }}
            </h2>
            <p
              class="font-medium text-secondary mb-10 text-left leading-relaxed">
              {{ $t("hero_section_description") }}
            </p>
            <NuxtLink :to="localPath('/about')">
              <Button>
                {{ $t("hero_section_btn") }}
              </Button>
            </NuxtLink>
            
            <!-- <NuxtLink
              :to="localPath('/about')"
              class="transition ease-out duration-300 text-base font-semibold bg-primary py-3 px-8 rounded-full hover:shadow-md hover:opacity-70 hover:text-slate-500"
            >
              {{ $t("hero_section_btn") }}
            </NuxtLink> -->
          </div>
          <div class="w-full px-4 self-end lg:w-1/2">
            <div class="relative mt-10 lg:mt-9 lg:right-0">
              <img
                src="../assets/hero.png"
                alt="Gema Kasih"
                class="max-w-full mx-auto"
              />
              <span class="absolute -bottom-10 -z-10 left-1/2 -translate-x-1/2">
                <svg
                  width="400"
                  height="400"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#FF0066"
                    d="M38.9,21.1C26.8,43.3,-22.7,42.5,-35.5,19.9C-48.2,-2.6,-24.1,-47,0.7,-46.6C25.5,-46.2,50.9,-1,38.9,21.1Z"
                    transform="translate(100 100) scale(1.9)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
