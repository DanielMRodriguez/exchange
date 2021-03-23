<template>
  <button
    @click="$emit('buttonc')"
    class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded"
  >
    <beat-loader
      :loading="isLoading"
      :color="'#68d391'"
      :size="8"
    ></beat-loader>
    <p v-show="!isLoading">
      <slot></slot>
    </p>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  methods: {}
};
</script>
