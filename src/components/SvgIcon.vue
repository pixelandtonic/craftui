<template>
    <component :is="computedIcon" :class="`c-icon inline-block w-${this.size} h-${this.size}`" />
</template>
<script>
import craftIcons from '../icons/craft/vue'
import solidIcons from '../icons/heroicons/solid'
import outlineIcons from '../icons/heroicons/outline'

export default {
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