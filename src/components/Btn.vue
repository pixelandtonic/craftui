<template>
    <component :is="component" class="c-btn" :to="to" :href="href" :target="target" :type="computedType" :class="[{
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
            },
            href: {
                type: String,
                default: null,
            },
            target: {
                type: String,
                default: null,
            },
        },

        computed: {
            component() {
                if (this.to !== null) {
                    return 'router-link'
                }

                if (this.href !== null) {
                    return 'a'
                }

                return 'button'
            },

            computedType() {
                if (this.to !== null || this.href !== null) {
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
        @apply .px-4 .py-2 .rounded .bg-grey-lighter .text-black .no-underline .border .border-solid .border-grey-lighter;

        &:not(.outline) {
            -webkit-box-shadow: 0 2px 6px 0 rgba(0,0,0,.2);
            box-shadow: 0 2px 6px 0 rgba(0,0,0,.2);
        }

        &:not([disabled]) {
            &:hover {
                @apply .cursor-pointer .bg-grey .border-grey .no-underline;
            }

            &:active {
                @apply .cursor-pointer .bg-grey-dark .border-grey-dark;
            }
        }

        &.block {
            @apply .w-full .my-1;
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
            @apply .bg-blue .border-blue .text-white;

            &:not([disabled]) {
                &:hover {
                    @apply .bg-blue-dark .border-blue-dark;
                }

                &:active {
                    @apply .bg-blue-darker .border-blue-darker;
                }
            }
        }

        &.warning {
            @apply .bg-orange .border-orange .text-white;

            &:not([disabled]) {
                &:hover {
                    @apply .bg-orange-dark .border-orange-dark;
                }

                &:active {
                    @apply .bg-orange-darker .border-orange-darker;
                }
            }
        }

        &.success {
            @apply .bg-green .border-green .text-white;

            &:not([disabled]) {
                &:hover {
                    @apply .bg-green-dark .border-green-dark;
                }

                &:active {
                    @apply .bg-green-darker .border-green-darker;
                }
            }
        }

        &.danger {
            @apply .bg-red .border-red .text-white;

            &:not([disabled]) {
                &:hover {
                    @apply .bg-red-dark .border-red-dark;
                }

                &:active {
                    @apply .bg-red-darker .border-red-darker;
                }
            }
        }

        &.info {
            @apply .bg-teal .border-teal .text-white;

            &:not([disabled]) {
                &:hover {
                    @apply .bg-teal-dark .border-teal-dark;
                }

                &:active {
                    @apply .bg-teal-darker .border-teal-darker;
                }
            }
        }

        &[disabled] {
            @apply .opacity-50 .cursor-default;
        }

        &.outline {
            @apply .bg-transparent;

            &.primary {
                @apply .text-blue;

                &:not([disabled]) {
                    &:hover {
                        @apply .text-white .bg-blue;
                    }

                    &:active {
                        @apply .text-white .bg-blue-darker;
                    }
                }
            }

            &.warning {
                @apply .text-orange;

                &:not([disabled]) {
                    &:hover {
                        @apply .text-white .bg-orange;
                    }

                    &:active {
                        @apply .text-white .bg-orange-darker;
                    }
                }
            }

            &.success {
                @apply .text-green;

                &:not([disabled]) {
                    &:hover {
                        @apply .text-white .bg-green;
                    }

                    &:active {
                        @apply .text-white .bg-green-darker;
                    }
                }
            }

            &.danger {
                @apply .text-red;

                &:not([disabled]) {
                    &:hover {
                        @apply .text-white .bg-red;
                    }

                    &:active {
                        @apply .text-white .bg-red-darker;
                    }
                }
            }

            &.info {
                @apply .text-teal;

                &:not([disabled]) {
                    &:hover {
                        @apply .text-white .bg-teal;
                    }

                    &:active {
                        @apply .text-white .bg-teal-darker;
                    }
                }
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
                .c-spinner {
                    & > .animation {
                        border-right-color: #fff;
                        border-bottom-color: #fff;
                    }
                }
            }

            .c-spinner {
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
