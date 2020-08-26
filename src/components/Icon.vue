<template>
    <component :is="computedIcon" :class="`c-icon inline-block w-${computedSize} h-${computedSize}`" />
</template>

<script>
import craftIcons from '../icons/craft/vue';
import outlineIcons from '../icons/heroicons/outline';
import solidIcons from '../icons/heroicons/solid';

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
            type: String,
            default: null,
        },

        /**
         * Size
         * 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', or '5xl'
         */
        size: {
            type: String | Number,
            default: 'base',
        },
    },

    computed: {
        computedIcon() {
            switch (this.source) {
                case 'craft':
                    return craftIcons[this.icon]
                case 'heroicons/outline':
                    return outlineIcons[this.icon]
                case 'heroicons/solid':
                    return solidIcons[this.icon]
                default:
                    return solidIcons[this.icon]
            }
        },

        computedSize() {
            console.log('size', this.size)
            if (Number.isInteger(this.size)) {
                return this.size
            }

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
