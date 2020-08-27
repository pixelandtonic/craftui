<template>
    <component v-if="computedIcon" :is="computedIcon" :class="`c-icon inline-block w-${size} h-${size}`" />
</template>
<script>
import craftIcons from '../icons/craft/vue'
import solidIcons from '../icons/heroicons/vue/solid'
import outlineIcons from '../icons/heroicons/vue/outline'

export default {
    props: {
        /**
         * Source
         */
        source: {
            type: String,
        },

        /**
         * Icon
         */
        icon: {
            type: String,
        },

        /**
         * Size
         */
        size: {
            type: Number,
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
    },
}
</script>