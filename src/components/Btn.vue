<template>
    <component :is="component" class="c-btn" :to="to" :href="href" :target="target" :type="computedType" :class="[{
                small,
                large,
                block,
                outline,
                loading,
                [kind]: true,
                'c-btn-icon': icon && !$slots.default
            }]"
            :disabled="disabled"
            @click="$emit('click')"
    >
        <template v-if="loading">
            <spinner></spinner>
        </template>

        <div class="c-btn-content">
            <icon v-if="icon && icon.length > 0" :icon="icon" size="sm" />

            <slot></slot>

            <icon class="ml-1" v-if="trailingIcon && trailingIcon.length > 0" :icon="trailingIcon" size="sm" />
        </div>
    </component>
</template>

<script>
    export default {
        name: 'Btn',

        props: {
            /**
             * 'button', 'submit', 'reset', or 'menu'
             */
            type: {
                type: String,
                default: 'button',
            },
            /**
             * 'default', 'primary', or 'danger'
             */
            kind: {
                type: String,
                default: 'default',
            },
            /**
             * Smaller version of button if set to `true`.
             */
            small: {
                type: Boolean,
                default: false,
            },
            /**
             * Larger version of button if set to `true`.
             */
            large: {
                type: Boolean,
                default: false,
            },
            /**
             * Block version of button if set to `true`.
             */
            block: {
                type: Boolean,
                default: false,
            },
            /**
             * Disabled version of button if set to `true`.
             */
            disabled: {
                type: Boolean,
                default: false,
            },
            /**
             * Outline version of button if set to `true`.
             */
            outline: {
                type: Boolean,
                default: false,
            },
            icon: {
                type: String,
                default: null,
            },
            trailingIcon: {
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
    @import "../sass/mixins";

    .c-btn,
    a.c-btn,
    button.c-btn {
        @apply .inline-block .px-4 .py-2 .text-sm .leading-5 .rounded-md .bg-interactive-secondary .text-interactive-text .no-underline .border .border-solid .border-interactive-secondary;

        &:focus {
            @apply .outline-none .shadow-outline;
        }

        &:not(.outline, :focus) {
        }

        &:not([disabled]) {
            &:hover {
                @apply .cursor-pointer .bg-interactive-secondary-hover .border-interactive-secondary-hover .no-underline;
            }

            &:active {
                @apply .cursor-pointer .bg-interactive-secondary-active .border-interactive-secondary-active;
            }
        }

        &.block {
            @apply .w-full .my-2;
        }

        &.small {
            @apply .px-3 .leading-4;

            .c-icon {
                width: 12px;
                height: 12px;
            }
        }

        &.large {
            @apply .text-base .leading-6;
        }

        &.primary,
        &.tertiary,
        &.success,
        &.danger {
            &:not(.outline) {
                .c-icon {
                    fill: #fff;
                }
            }
        }

        &.primary {
            @apply .bg-interactive-primary .border-interactive-primary .text-interactive-text-inverse;

            &:not([disabled]) {
                &:hover {
                    @apply .bg-interactive-primary-hover .border-interactive-primary-hover;
                }

                &:active {
                    @apply .bg-interactive-primary-active .border-interactive-primary-active;
                }
            }
        }

        &.tertiary {
            @apply .bg-interactive-tertiary .border-interactive-tertiary .text-interactive-text-inverse;

            &:not([disabled]) {
                &:hover {
                    @apply .bg-interactive-tertiary-hover .border-interactive-tertiary-hover;
                }

                &:active {
                    @apply .bg-interactive-tertiary-active .border-interactive-tertiary-active;
                }
            }
        }

        &.success {
            @apply .bg-interactive-success .border-interactive-success .text-interactive-text-inverse;

            &:not([disabled]) {
                &:hover {
                    @apply .bg-interactive-success-hover .border-interactive-success-hover;
                }

                &:active {
                    @apply .bg-interactive-success-active .border-interactive-success-active;
                }
            }
        }

        &.danger {
            @apply .bg-interactive-danger .border-interactive-danger .text-interactive-text-inverse;

            &:not([disabled]) {
                &:hover {
                    @apply .bg-interactive-danger-hover .border-interactive-danger-hover;
                }

                &:active {
                    @apply .bg-interactive-danger-active .border-interactive-danger-active;
                }
            }
        }

        &[disabled] {
            @apply .opacity-50 .cursor-default;
        }

        &.outline {
            @apply .bg-transparent;

            &.primary {
                @apply .text-interactive-primary;

                &:not([disabled]) {
                    &:hover {
                        @apply .text-white .bg-interactive-primary-hover;
                    }

                    &:active {
                        @apply .text-white .bg-interactive-primary-active;
                    }
                }
            }

            &.tertiary {
                @apply .text-interactive-tertiary;

                &:not([disabled]) {
                    &:hover {
                        @apply .text-white .bg-interactive-tertiary;
                    }

                    &:active {
                        @apply .text-white .bg-interactive-tertiary-active;
                    }
                }
            }

            &.success {
                @apply .text-interactive-success;

                &:not([disabled]) {
                    &:hover {
                        @apply .text-white .bg-interactive-success;
                    }

                    &:active {
                        @apply .text-white .bg-interactive-success-active;
                    }
                }
            }

            &.danger {
                @apply .text-interactive-danger;

                &:not([disabled]) {
                    &:hover {
                        @apply .text-white .bg-interactive-danger;
                    }

                    &:active {
                        @apply .text-white .bg-interactive-danger-active;
                    }
                }
            }

            .c-icon {
                @apply .fill-current;
            }
        }

        &.loading {
            @apply .relative;

            &:not(.outline) {
                &.primary,
                &.tertiary,
                &.success,
                &.danger {
                    .c-spinner {
                        & > .animation {
                            @apply .border-white;
                        }
                    }
                }
            }

            &.outline {
                &.primary .c-spinner > .animation {
                    @apply .border-interactive-primary;
                }

                &.tertiary .c-spinner > .animation {
                    @apply .border-interactive-tertiary;
                }

                &.success .c-spinner > .animation {
                    @apply .border-interactive-success;
                }

                &.danger .c-spinner > .animation {
                    @apply .border-interactive-danger;
                }
            }

            .c-spinner {
                @apply .absolute .inset-0 .flex .justify-center .items-center;
            }

            .c-btn-content {
                @apply .invisible;
            }
        }

        .c-icon {
            @apply .align-middle;
        }

        &:not(.c-btn-icon) {
            .c-icon {
                @include mr(1);
            }
        }


        .c-btn-content {
            @apply .inline-block;
        }
    }
</style>
