<template>
    <div class="c-pane" :class="{
        [`${PREFIX}bg-primary-background ${PREFIX}rounded-lg ${PREFIX}shadow ${PREFIX}mb-8 ${PREFIX}overflow-hidden`]: true,
        [`${PREFIX}overflow-x-auto`]: type === 'table',
    }">
        <div v-if="$slots.header" :class="{
            [`${PREFIX}px-4 ${PREFIX}py-5 sm:${PREFIX}p-6 ${PREFIX}border-b`]: !!this.$slots.header
        }">
            <slot name="header"></slot>
        </div>

        <div :class="{
            [`${PREFIX}px-4 ${PREFIX}py-5 sm:${PREFIX}p-6`]: type !== 'table' && (padded === undefined||padded === true)
        }">
            <slot></slot>
        </div>

        <div v-if="$slots.footer" :class="{
            [`${PREFIX}px-4 ${PREFIX}py-5 sm:${PREFIX}p-6 ${PREFIX}border-t`]: !!this.$slots.footer && (padded === undefined||padded === true)
        }">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['padded', 'type'],
    }
</script>

<style lang="scss">
    .c-pane {
        table {
            @apply .overflow-hidden;
            @apply .w-full .leading-normal;
            border-collapse: collapse;

            th {
                @apply .bg-cool-gray-50 .text-cool-gray-500 .text-xs .font-medium .uppercase .border-t-0 .px-6 .py-3;
            }

            td {
                @apply .px-6 py-4 .border-t .border-separator .text-sm;
            }

            th, td {
                @apply text-left;

                &.thin {
                    width: 0.01% !important;
                }
            }

            td.icon-col {
                width: 0.01% !important;

                img {
                    width: 40px;
                    height: 40px;
                    max-width: none;
                }
            }

            td.name-col {
                min-width: 220px;
            }

            td.date-col {
                min-width: 200px;
            }
        }
    }

</style>