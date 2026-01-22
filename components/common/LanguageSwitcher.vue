<template>
  <div class="relative">
    <div class="absolute -top-5 right-0 z-50">
      <button class="btn text-sm bg-zinc-200 hover:bg-zinc-100 text-black border-zinc-200 shadow-none" @click="showDropdown = !showDropdown">
        <span class="icon-[tabler--language]"></span>
        <div v-if="currentLocale.code==='en'">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><mask id="circleFlagsEn0"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#circleFlagsEn0)"><path fill="#eee" d="m0 0l8 22l-8 23v23l32 54l-32 54v32l32 48l-32 48v32l32 54l-32 54v68l22-8l23 8h23l54-32l54 32h32l48-32l48 32h32l54-32l54 32h68l-8-22l8-23v-23l-32-54l32-54v-32l-32-48l32-48v-32l-32-54l32-54V0l-22 8l-23-8h-23l-54 32l-54-32h-32l-48 32l-48-32h-32l-54 32L68 0z"/><path fill="#0052b4" d="M336 0v108L444 0Zm176 68L404 176h108zM0 176h108L0 68ZM68 0l108 108V0Zm108 512V404L68 512ZM0 444l108-108H0Zm512-108H404l108 108Zm-68 176L336 404v108z"/><path fill="#d80027" d="M0 0v45l131 131h45zm208 0v208H0v96h208v208h96V304h208v-96H304V0zm259 0L336 131v45L512 0zM176 336L0 512h45l131-131zm160 0l176 176v-45L381 336z"/></g></svg>
        </div>
        <div v-else>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><mask id="SVGuywqVbel"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#SVGuywqVbel)"><path fill="#eee" d="M167 0h178l25.9 252.3L345 512H167l-29.8-253.4z"/><path fill="#0052b4" d="M0 0h167v512H0z"/><path fill="#d80027" d="M345 0h167v512H345z"/></g></svg>
        </div>
      </button>
      
      <div ref="dropdownRef" v-show="showDropdown" class="flex flex-col justify-start w-full bg-white shadow-2xl rounded-b text-sm px-2 py-1">
        <button @click.prevent="changeLanguage(locale.code)" v-for="locale in locales" :key="locale.code" class="hover:bg-zinc-100 flex items-center gap-2 py-1.5 px-1 rounded">
          <svg v-if="locale.code==='en'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><mask id="circleFlagsEn0"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#circleFlagsEn0)"><path fill="#eee" d="m0 0l8 22l-8 23v23l32 54l-32 54v32l32 48l-32 48v32l32 54l-32 54v68l22-8l23 8h23l54-32l54 32h32l48-32l48 32h32l54-32l54 32h68l-8-22l8-23v-23l-32-54l32-54v-32l-32-48l32-48v-32l-32-54l32-54V0l-22 8l-23-8h-23l-54 32l-54-32h-32l-48 32l-48-32h-32l-54 32L68 0z"/><path fill="#0052b4" d="M336 0v108L444 0Zm176 68L404 176h108zM0 176h108L0 68ZM68 0l108 108V0Zm108 512V404L68 512ZM0 444l108-108H0Zm512-108H404l108 108Zm-68 176L336 404v108z"/><path fill="#d80027" d="M0 0v45l131 131h45zm208 0v208H0v96h208v208h96V304h208v-96H304V0zm259 0L336 131v45L512 0zM176 336L0 512h45l131-131zm160 0l176 176v-45L381 336z"/></g></svg>
          <svg v-if="locale.code==='fr'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><mask id="SVGuywqVbel"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#SVGuywqVbel)"><path fill="#eee" d="M167 0h178l25.9 252.3L345 512H167l-29.8-253.4z"/><path fill="#0052b4" d="M0 0h167v512H0z"/><path fill="#d80027" d="M345 0h167v512H345z"/></g></svg>
          {{ locale.code.toUpperCase() }}
        </button>
      </div>
    </div>
  </div>
</template>


<script setup>
import { useDataStore } from '@/stores/dataStore'
import { useAuth } from '~/composables/useAuth'

const dataStore = useDataStore()
const { userId, projectId, checkAuth } = useAuth()

const selectedLang = ref(dataStore.preferences.lang)

const showDropdown = ref(false)
const dropdownRef = ref(null)
const activeLang = ref();

const locales = [
  { code: 'fr', name: 'Français' },
  { code: 'en', name: 'English' },
]

onMounted(async () => {
  await checkAuth();
})

const currentLocale = computed(() => {
  return locales.find(l => l.code === activeLang.value) || locales[0]
})

const onClickOutside = ( () => {
  showDropdown.value = false
})

const changeLanguage = async (langCode) => {
  await dataStore.setLanguage(userId.value, projectId.value, langCode)

  showDropdown.value = false
  activeLang.value = langCode;
}
</script>