<template>
    <span
            class="tw-inline-flex tw-items-center tw-rounded tw-font-medium"
            :class="[{
                ['tw-px-2 tw-py-0.5 tw-leading-4 tw-text-xs']: !large,
                ['tw-px-3 tw-py-0.5 tw-leading-5 tw-text-sm']: large,
                ['tw-bg-'+type+'-background']: true,
                ['tw-text-'+type+'-text']: true
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