<template>
    <span
            :class="[{
                [`${PREFIX}inline-flex ${PREFIX}items-center ${PREFIX}rounded ${PREFIX}font-medium`]: true,
                [`${PREFIX}px-2 ${PREFIX}py-0.5 ${PREFIX}leading-4 ${PREFIX}text-xs`]: !large,
                [`${PREFIX}px-2.5 ${PREFIX}py-0.5 ${PREFIX}leading-5 ${PREFIX}text-sm`]: large,
                [`${PREFIX}bg-${type}-background`]: true,
                [`${PREFIX}text-${type}-text`]: true
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