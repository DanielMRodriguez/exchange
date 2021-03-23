<template>
  <header class="shadow bg-blue-500">
    <div class="container">
      <nav>
        <nav class="flex items-center justify-between flex-wrap p-6">
          <div class="sm:flex justify-around">
            <router-link
              :to="{ path: '/', name: 'home' }"
              class="text-white text-3xl font-bold p-1"
            >
              Exchange
            </router-link>
            <ul
              class="text-gray-300 sm:self-center text-xl border-t sm:border-none overflow-hidden menu"
            >
              <li v-for="i in links" :key="i.title" class="sm:inline-block">
                <router-link :to="i.url" class="p-1 hover:text-white text-sm	">{{
                  i.title
                }}</router-link>
              </li>
            </ul>
          </div>
        </nav>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "PxHeader",
  props: {
    links: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped></style>
