<template>
    <div class="c-pane" :class="{
        'bg-primary-background rounded-lg shadow mb-8 overflow-hidden': true,
        'overflow-x-auto': type === 'table',
    }">
        <div v-if="$slots.header" :class="{
            'px-4 py-5 sm:p-6': !!this.$slots.header,
            'border-b': !!this.$slots.header && !!$slots.default
        }">
            <slot name="header"></slot>
        </div>

        <div v-if="$slots.default" :class="{
            'px-4 py-5 sm:p-6': type !== 'table' && (padded === undefined||padded === true)
        }">
            <slot></slot>
        </div>

        <div v-if="$slots.footer" :class="{
            'px-4 py-5 sm:p-6 border-t': !!this.$slots.footer && (padded === undefined||padded === true)
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
                @apply .bg-tertiary-background .text-light-text .text-xs .font-medium .uppercase .border-t-0 .px-6 .py-3;
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