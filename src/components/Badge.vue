<template>
    <span
            class="inline-flex items-center rounded font-medium"
            :class="[{
                ['px-2 py-0.5 leading-4 text-xs']: !large,
                ['px-2.5 py-0.5 leading-5 text-sm']: large,
                ['bg-'+type+'-background']: true,
                ['text-'+type+'-text']: true
            }]"
    >
        <slot></slot>
    </span>
</template>

<script>
    export default {
        props: {
            /**
             * 'default', 'success', 'info', 'warning', or 'danger'
             */
            type: {
                type: String,
                default: 'default',
            },
            /**
             * Larger version of badge if set to `true`.
             */
            large: {
                type: Boolean,
                default: false,
            },
        },
    }
</script>