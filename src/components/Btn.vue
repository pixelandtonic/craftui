<template>
    <component :is="component" class="c-btn" :to="to" :type="computedType" :class="[{
                large,
                block,
                outline,
                loading,
            }]"
            :disabled="disabled"
            @click="$emit('click')"
    >
        <template v-if="loading">
            <spinner></spinner>
        </template>

        <div class="c-btn-content">
            <icon v-if="icon" :icon="icon"/>

            <slot></slot>
        </div>
    </component>
</template>

<script>
    export default {
        name: 'Btn',

        props: {
            type: {
                type: String,
                default: 'button',
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
            to: {
                type: String,
                default: null,
            }
        },

        computed: {
            component() {
                if (this.to !== null) {
                    return 'router-link'
                }

                return 'button'
            },

            computedType() {
                if (this.to !== null) {
                    return null
                }

                return this.type
            }
        }
    }
</script>

<style lang="scss">
    .c-btn,
    a.c-btn,
    button.c-btn {
        @apply .px-4 .py-2 .rounded .bg-grey-lighter .text-black .no-underline;

        &:not(.outline) {
            -webkit-box-shadow: 0 2px 6px 0 rgba(0,0,0,.2);
            box-shadow: 0 2px 6px 0 rgba(0,0,0,.2);
        }

        &:hover {
            @apply .cursor-pointer .bg-grey .no-underline;
        }

        &:active {
            @apply .cursor-pointer .bg-grey-dark;
        }

        &.block {
            @apply .w-full;
        }

        &.small {
            @apply .text-sm;

            .c-icon {
                width: 12px;
                height: 12px;
            }
        }

        &.large {
            @apply .text-lg .py-3;
        }

        &.primary,
        &.warning,
        &.success,
        &.danger,
        &.info {
            &:not(.outline) {
                .c-icon {
                    fill: #fff;
                }
            }
        }

        &.primary {
            @apply .bg-blue .text-white;

            &:hover {
                @apply .bg-blue-dark;
            }

            &:active {
                @apply .bg-blue-darker;
            }
        }

        &.warning {
            @apply .bg-orange .text-white;

            &:hover {
                @apply .bg-orange-dark;
            }

            &:active {
                @apply .bg-orange-darker;
            }
        }

        &.success {
            @apply .bg-green .text-white;

            &:hover {
                @apply .bg-green-dark;
            }

            &:active {
                @apply .bg-green-darker;
            }
        }

        &.danger {
            @apply .bg-red .text-white;

            &:hover {
                @apply .bg-red-dark;
            }

            &:active {
                @apply .bg-red-darker;
            }
        }

        &.info {
            @apply .bg-teal .text-white;

            &:hover {
                @apply .bg-teal-dark;
            }

            &:active {
                @apply .bg-teal-darker;
            }
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

            .c-icon {
                @apply .fill-current;
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

        .c-icon {
            @apply .mr-1 .align-middle;

        }

        .c-btn-content {
            @apply .inline-block;
        }
    }
</style>
