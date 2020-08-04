<template>
    <component :is="component" class="c-btn truncate" :to="to" :href="href" :target="target" :type="computedType" :class="[{
                small,
                large,
                block,
                outline,
                loading,
                [kind]: true,
                'c-btn-icon': icon && !$slots.default,
                [`${PREFIX}group`]: true,
                ...cssClass,
            }]"
            :disabled="disabled"
            @click="$emit('click')"
    >
        <template v-if="loading">
            <spinner :animationClass="`${PREFIX}border-${animationColor} group-hover:${PREFIX}border-${animationColorHover}`"></spinner>
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
                default: 'secondary',
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
            },

            cssClass() {
                let cssClass = {}

                cssClass[`${this.PREFIX}inline-block ${this.PREFIX}px-4 ${this.PREFIX}py-2 ${this.PREFIX}text-sm ${this.PREFIX}leading-5 ${this.PREFIX}rounded-md ${this.PREFIX}no-underline ${this.PREFIX}border ${this.PREFIX}border-solid`] = true

                if (this.kind !== 'secondary') {
                    cssClass[`${this.PREFIX}border-interactive-${this.kind}`] = true

                    if (this.outline) {
                        cssClass[`${this.PREFIX}text-interactive-${this.kind}`] = true

                        if (!this.disabled) {
                            cssClass[`hover:${this.PREFIX}text-interactive-text-inverse hover:${this.PREFIX}bg-interactive-${this.kind}`] = true
                            cssClass[`active:${this.PREFIX}text-interactive-text-inverse active:${this.PREFIX}bg-interactive-${this.kind}-active`] = true
                        }
                    } else {
                        cssClass[`${this.PREFIX}text-interactive-text-inverse`] = true
                        cssClass[`${this.PREFIX}bg-interactive-${this.kind}`] = true

                        if(!this.disabled) {
                            cssClass[`hover:${this.PREFIX}bg-interactive-${this.kind}-hover hover:${this.PREFIX}border-interactive-${this.kind}-hover`] = true
                            cssClass[`active:${this.PREFIX}bg-interactive-${this.kind}-active active:${this.PREFIX}border-interactive-${this.kind}-active`] = true
                        }
                    }
                } else {
                    cssClass[`${this.PREFIX}border-interactive-secondary ${this.PREFIX}text-interactive-text`] = true

                    if(!this.disabled) {
                        cssClass[`hover:${this.PREFIX}cursor-pointer hover:${this.PREFIX}bg-interactive-secondary-hover hover:${this.PREFIX}border-interactive-secondary-hover hover:${this.PREFIX}no-underline`] = true
                        cssClass[`active:${this.PREFIX}cursor-pointer active:${this.PREFIX}bg-interactive-secondary-active active:${this.PREFIX}border-interactive-secondary-active`] = true
                    }

                    if (this.outline) {
                        cssClass[`${this.PREFIX}bg-transparent`] = true
                    } else {
                        cssClass[`${this.PREFIX}bg-interactive-secondary`] = true
                    }
                }

                return cssClass
            },

            animationColor() {
                return (this.kind === 'secondary' ? 'interactive-text' : (!this.outline ? 'text-inverse' : 'interactive-'+this.kind))
            },

            animationColorHover() {
                return this.kind === 'secondary' ? 'interactive-text' : 'text-inverse'
            }
        }
    }
</script>

<style lang="scss">
    @import "../sass/mixins";

    .c-btn,
    a.c-btn,
    button.c-btn {
        &:focus {
            @apply .outline-none .shadow-outline;
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

        &[disabled] {
            @apply .opacity-50 .cursor-default;
        }

        &.outline {
            .c-icon {
                @apply .fill-current;
            }
        }

        &.loading {
            @apply .relative;

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
