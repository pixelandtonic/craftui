<template>
  <button :class="'btn ' + (type ? type : 'default')" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
    export default {
        props: ['type'],
    }
</script>

<style lang="scss">
button {
  @apply .px-4 .py-2 .rounded .bg-grey-lighter;

  &.primary {
    @apply .bg-blue .text-white;
  }

  &.warning {
    @apply .bg-orange .text-white;
  }

  &.danger {
    @apply .bg-red .text-white;
  }
}
</style>
