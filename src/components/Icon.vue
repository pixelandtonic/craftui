<template>
    <svg viewBox="0 0 18 18" width="18" height="18" role="presentation" class="c-icon tw-inline-block tw-align-middle tw-relative tw-fill-current" :class="{
        ['tw-w-3 tw-h-3']: size === 'sm',
        ['tw-w-4 tw-h-4']: size === 'base',
        ['tw-w-5 tw-h-5']: size === 'lg',
        ['tw-w-6 tw-h-6']: size === 'xl',
        ['tw-w-8 tw-h-8']: size === '2xl',
        ['tw-w-10 tw-h-10']: size === '3xl',
        ['tw-w-12 tw-h-12']: size === '4xl',
        ['tw-w-16 tw-h-16']: size === '5xl',
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

