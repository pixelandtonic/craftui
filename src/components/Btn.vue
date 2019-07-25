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
            <icon v-if="icon && icon.length > 0" :icon="icon" />

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
            kind: {
                type: String,
                default: 'default',
            },
            small: {
                type: Boolean,
                default: false,
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
    @import "../sass/mixins";

    .c-btn,
    a.c-btn,
    button.c-btn {
        @apply .inline-block .px-4 .py-2 .rounded .bg-interactive-secondary .text-interactive-secondary-text .no-underline .border .border-solid .border-interactive-secondary;

        &:not(.outline) {
            @apply .shadow;
            box-shadow: 0 1px 3px 0 var(--craftui-shadow-1), 0 1px 2px 0 var(--craftui-shadow-2);
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
        &.danger {
            &:not(.outline) {
                .c-icon {
                    fill: #fff;
                }
            }
        }

        &.primary:not(.outline) {
            @apply .bg-interactive-primary .border-interactive-primary .text-interactive-primary-text;

            &:not([disabled]) {
                &:hover {
                    @apply .bg-interactive-primary-hover .border-interactive-primary-hover;
                }

                &:active {
                    @apply .bg-interactive-primary-active .border-interactive-primary-active;
                }
            }
        }

        &.danger {
            @apply .bg-interactive-danger .border-interactive-danger .text-interactive-danger-text;

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
                @apply .text-blue-500;

                &:not([disabled]) {
                    &:hover {
                        @apply .text-white .bg-blue-500;
                    }

                    &:active {
                        @apply .text-white .bg-blue-800;
                    }
                }
            }

            &.danger {
                @apply .text-red-500;

                &:not([disabled]) {
                    &:hover {
                        @apply .text-white .bg-red-500;
                    }

                    &:active {
                        @apply .text-white .bg-red-800;
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
                    @apply .border-blue-500;
                }

                &.danger .c-spinner > .animation {
                    @apply .border-red-500;
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
