<template>
    <svg viewBox="0 0 18 18" width="18" height="18" role="presentation" class="c-icon" :class="{
        ['size-' + size]: true,
    }">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#' + icon"></use>
    </svg>
</template>

<script>
    export default {
        props: {
            icon: {
                type: String,
                default: null,
            },
            size: {
                type: String,
                default: 'base',
            },
        },
    }
</script>

<style lang="scss">
    .c-icon {
        @apply .inline-block .align-middle .relative .fill-current;
        top: -2px;
        width: 18px;
        height: 18px;

        &.size-sm {
            width: .75rem;
            height: .75rem;
        }

        &.size-base {
            width: 1rem;
            height: 1rem;
        }

        &.size-lg {
            width: 1.25rem;
            height: 1.25rem;
        }

        &.size-xl {
            width: 1.5rem;
            height: 1.5rem;
        }

        &.size-2xl {
            width: 1.75rem;
            height: 1.75rem;
        }

        &.size-3xl {
            width: 2.25rem;
            height: 2.25rem;
        }

        &.size-4xl {
            width: 3rem;
            height: 3rem;
        }

        &.size-5xl {
            width: 4rem;
            height: 4rem;
        }
    }
</style>
