<template>
    <svg viewBox="0 0 18 18" width="18" height="18" role="presentation" class="c-icon" :class="{
        [`${PREFIX}w-3 ${PREFIX}h-3`]: size === 'sm',
        [`${PREFIX}w-4 ${PREFIX}h-4`]: size === 'base',
        [`${PREFIX}w-5 ${PREFIX}h-5`]: size === 'lg',
        [`${PREFIX}w-6 ${PREFIX}h-6`]: size === 'xl',
        [`${PREFIX}w-8 ${PREFIX}h-8`]: size === '2xl',
        [`${PREFIX}w-10 ${PREFIX}h-10`]: size === '3xl',
        [`${PREFIX}w-12 ${PREFIX}h-12`]: size === '4xl',
        [`${PREFIX}w-16 ${PREFIX}h-16`]: size === '5xl',
    }">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#' + icon"></use>
    </svg>
</template>

<script>
    export default {
        props: {
            /**
             * The ID of the icon.
             */
            icon: {
                type: String,
                default: null,
            },
            /**
             * 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', or '5xl'
             */
            size: {
                type: String,
                default: 'base',
            },
        },
    }
</script>

<style lang="scss">
    .c-icon {
        @apply inline-block align-middle relative fill-current;
    }
</style>