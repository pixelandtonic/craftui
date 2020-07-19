<template>
    <svg viewBox="0 0 18 18" width="18" height="18" role="presentation" class="c-icon" :class="`${PREFIX}w-${computedSize} ${PREFIX}h-${computedSize}`">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#' + set + '-' + icon"></use>
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
             * Size
             * 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', or '5xl'
             */
            size: {
                type: String,
                default: 'base',
            },

            /**
             * Set of icons
             */
            set: {
                type: String,
                default: 'regular'
            }
        },

        computed: {
            computedSize() {
                const predefinedSizes = {
                    sm: 3,
                    base: 4,
                    lg: 5,
                    xl: 6,
                    '2xl': 8,
                    '3xl': 10,
                    '4xl': 12,
                    '5xl': 16,
                }

                let size = this.size

                if (predefinedSizes[this.size]) {
                    size = predefinedSizes[this.size]
                }


                return size
            }
        }
    }
</script>

<style lang="scss">
    .c-icon {
        @apply inline-block align-middle relative fill-current;
    }
</style>