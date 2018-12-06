<template>
  <button :class="'c-btn '
                      + (type ? type : 'default')
                      + (typeof large !== 'undefined' ? ' large' : '')
                      + (typeof block !== 'undefined' ? ' block' : '')"
                      @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
    export default {
        props: ['type', 'large', 'block'],
    }
</script>

<style lang="scss" scoped>
.c-btn {
  @apply .px-4 .py-2 .rounded .bg-grey-lighter;

  &.block {
    @apply .w-full;
  }

  &.large {
    @apply .text-lg .py-3;
  }

  &.large {
    @apply .text-lg .py-3;
  }

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
