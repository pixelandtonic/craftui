<template>
    <button class="c-btn" :class="[{
                [type]: true,
                large,
                block,
                outline,
                loading,
            }]"
            :disabled="disabled"
            @click="$emit('click')"
    >
        <icon v-if="icon" :icon="icon"/>

        <template v-if="loading">
            <loading-indicator></loading-indicator>
        </template>

        <div class="c-btn-content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    export default {
        name: 'Btn',

        props: {
            type: {
                type: String,
                default: null,
            },
            large: {
                type: Boolean,
                default: false,
            },
            block: {
                type: Boolean,
                default: false,
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            outline: {
                type: Boolean,
                default: false,
            },
            icon: {
                type: String,
                default: null,
            },
            loading: {
                type: Boolean,
                default: false,
            },
        },
    }
</script>

<style lang="scss">
    .c-btn {
        @apply .px-4 .py-2 .rounded .bg-grey-lighter;

        &:not(.outline) {
            -webkit-box-shadow: 0 2px 6px 0 rgba(0,0,0,.2);
            box-shadow: 0 2px 6px 0 rgba(0,0,0,.2);
        }

        &:hover {
            @apply .cursor-pointer;
        }

        &.block {
            @apply .w-full;
        }

        &.large {
            @apply .text-lg .py-3;
        }

        &.large {
            @apply .text-lg .py-3;
        }

        &.primary {
            @apply .bg-blue .text-white;
        }

        &.warning {
            @apply .bg-orange .text-white;
        }

        &.success {
            @apply .bg-green .text-white;
        }

        &.danger {
            @apply .bg-red .text-white;
        }

        &.info {
            @apply .bg-teal .text-white;
        }

        &[disabled] {
            @apply .opacity-50 .cursor-default;
        }

        &.outline {
            @apply .bg-transparent .border .border-solid;

            &.primary {
                @apply .border-blue .text-blue;
            }

            &.warning {
                @apply .border-orange .text-orange;
            }

            &.success {
                @apply .border-green .text-green;
            }

            &.danger {
                @apply .border-red .text-red;
            }

            &.info {
                @apply .border-teal .text-teal;
            }
        }

        &.loading {
            @apply .relative;

            &.primary,
            &.warning,
            &.success,
            &.danger,
            &.info {
                .loading-indicator {
                    & > .animation {
                        border-right-color: #fff;
                        border-bottom-color: #fff;
                    }
                }
            }

            .loading-indicator {
                @apply .absolute;
                top: 50%;
                left: 50%;
                margin-top: -12px;
                margin-left: -12px;
            }

            .c-btn-content {
                @apply .invisible;
            }
        }

        svg {
            @apply .mr-2;
        }

        .c-btn-content {
            @apply .inline-block;
        }
    }
</style>
