<template>
    <svg viewBox="0 0 18 18" width="18" height="18" role="presentation" class="c-icon inline-block align-middle relative fill-current" :class="{
        ['w-3 h-3']: size === 'sm',
        ['w-4 h-4']: size === 'base',
        ['w-5 h-5']: size === 'lg',
        ['w-6 h-6']: size === 'xl',
        ['w-8 h-8']: size === '2xl',
        ['w-10 h-10']: size === '3xl',
        ['w-12 h-12']: size === '4xl',
        ['w-16 h-16']: size === '5xl',
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

