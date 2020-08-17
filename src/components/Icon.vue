<template>
    <component :is="component" :set="computedSet" :icon="computedIcon" :size="computedSize"></component>
</template>

<script>
export default {
    props: {
        source: {
            type: String,
            default: 'craft',
        },

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
        component() {
            switch (this.source) {
                case 'heroicons':
                    return 'hero-icon'
                default:
                    return 'craft-icon'
            }
        },

        computedSet() {
            if (Array.isArray(this.icon)) {
                return this.icon[0]
            }

            switch (this.source) {
                case 'heroicons':
                    return 'solid'
                default:
                    return 'regular'
            }
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
