<template>
  <div class="breadcrumbs text-[0.85rem]">
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>

      <template v-for="(crumb, index) in breadcrumbs" :key="index">
        <li class="breadcrumbs-separator rtl:rotate-180">
          <span class="icon-[tabler--chevron-right]"></span>
        </li>

        <li v-if="index < breadcrumbs.length - 1">
          <NuxtLink :to="crumb.link">{{ crumb.label }}</NuxtLink>
        </li>
        <li v-else aria-current="page">{{ crumb.label }}</li>
      </template>
    </ul>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const breadcrumbs = computed(() => {
  const pathSegments = route.path
    .split("/")
    .filter(Boolean); 

  const cleanedSegments = pathSegments.filter(
    (seg) => seg !== "user" && seg !== "admin"
  );

  return cleanedSegments.map((segment, index) => {
    const label = segment
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase());

    const link = "/" + pathSegments.slice(0, index + 2).join("/");

    return { label, link };
  });
});
</script>
