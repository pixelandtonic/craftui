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
                    @apply .border-blue;
                }

                &.danger .c-spinner > .animation {
                    @apply .border-red;
                }
            }

            .c-spinner {
                @apply .absolute .pin .flex .justify-center .items-center;
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
