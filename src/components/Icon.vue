<template>
    <svg viewBox="0 0 18 18" width="18" height="18" role="presentation" class="c-icon inline-block align-middle fill-current" :class="`${PREFIX}w-${computedSize} ${PREFIX}h-${computedSize}`">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#' + computedSet + '-' + computedIcon"></use>
    </svg>
</template>

<script>
    export default {
        props: {
            /**
             * The ID of the icon.
             */
            icon: {
                type: String | Array,
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
        },

        computed: {
            computedSet() {
                if (Array.isArray(this.icon)) {
                    return this.icon[0]
                }

                return 'regular'
            },
            computedIcon() {
                if (Array.isArray(this.icon)) {
                    return this.icon[1]
                }

                return this.icon
            },
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
