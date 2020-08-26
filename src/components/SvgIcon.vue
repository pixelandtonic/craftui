<template>
    <!--<div v-html="computedIcon" :class="`c-icon inline-block w-${this.size} h-${this.size}`"></div>-->
    <component :is="computedIcon" :class="`c-icon inline-block w-${this.size} h-${this.size}`" />
</template>
<script>
import craftIcons from '../icons/craft/vue'
import solidIcons from '../icons/heroicons/solid'
import outlineIcons from '../icons/heroicons/outline'

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
        craftIcons() {
            return craftIcons
        },
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

/*    mounted() {
        this.$el.firstChild.classList.add(`w-${this.size}`, `h-${this.size}`)
    }*/

    // render(h) {
    //     // console.log('icons', icons)
    //     return h('alert')
    // }
}
</script>