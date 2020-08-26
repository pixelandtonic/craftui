<template>
    <svg viewBox="0 0 18 18" width="18" height="18" role="presentation" class="c-icon" :class="`w-${size} h-${size} inline-block align-middle fill-current`">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#' + set + '-' + icon"></use>
    </svg>
</template>

<script>
    export default {
        props: {
            source: {
                type: String,
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
             */
            size: {
                type: Number,
            },
        },

        computed: {
            set() {
                switch(this.source) {
                    case 'fontawesome/light':
                        return 'light'
                    case 'fontawesome/regular':
                        return 'regular'
                    default:
                        return 'regular'
                }
            }
        }
    }
</script>
