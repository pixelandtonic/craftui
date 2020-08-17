<template>
    <div v-html="computedIcon" :class="`c-icon inline-block w-${size} h-${size}`"></div>
</template>

<script>
import solidIcons from '../icons/heroicons/solid'
import outlineIcons from '../icons/heroicons/outline'

export default {
    props: {
        /**
         * Set
         */
        set: {
            type: String,
            default: 'solid',
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
            switch (this.set) {
                case 'outline':
                    return outlineIcons[this.icon]
                default:
                    return solidIcons[this.icon]
            }
        }
    }
}
</script>