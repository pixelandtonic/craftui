<template>
    <button :class="cssClass"
            :disabled="disabled"
            @click="$emit('click')">
        <icon v-if="icon" :icon="icon" />
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'Btn',

        props: ['type', 'large', 'block', 'disabled', 'outline', 'icon'],

        computed: {
            cssClass() {
                return 'c-btn '
                    + (this.type ? this.type : 'default')
                    + (typeof this.large !== 'undefined' ? ' large' : '')
                    + (typeof this.block !== 'undefined' ? ' block' : '')
                    + (typeof this.outline !== 'undefined' ? ' outline' : '');
            }
        },
    }
</script>

<style lang="scss">
    .c-btn {
        @apply .px-4 .py-2 .rounded .bg-grey-lighter;

        &:hover {
            @apply .cursor-pointer;
        }

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

        &[disabled] {
            @apply .opacity-50 .cursor-default;
        }

        &.outline {
            @apply .bg-transparent;

            &.primary {
                @apply .border .border-solid .border-blue .text-blue;
            }

            &.warning {
                @apply .border .border-solid .border-orange .text-orange;
            }

            &.danger {
                @apply .border .border-solid .border-red .text-red;
            }
        }
    }
</style>
