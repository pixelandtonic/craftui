<template>
    <component :is="component" class="c-btn truncate" :to="to" :href="href" :target="target" :type="computedType" :class="[{
                small,
                large,
                block,
                outline,
                loading,
                [kind]: true,
                'c-btn-icon': icon && !$slots.default,
                'group': true,
                ...cssClass,
            }]"
            :disabled="disabled"
            @click="$emit('click')"
    >
        <template v-if="loading">
            <spinner :animationClass="`border-${animationColor} group-hover:border-${animationColorHover}`"></spinner>
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
                type: String | Array,
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

                cssClass['inline-block px-4 py-2 text-sm leading-5 rounded-md no-underline border border-solid'] = true

                if (this.kind !== 'secondary') {
                    cssClass[`border-interactive-${this.kind}`] = true

                    if (this.outline) {
                        cssClass[`text-interactive-${this.kind}`] = true

                        if (!this.disabled) {
                            cssClass[`hover:text-interactive-text-inverse hover:bg-interactive-${this.kind}`] = true
                            cssClass[`active:text-interactive-text-inverse active:bg-interactive-${this.kind}-active`] = true
                        }
                    } else {
                        cssClass['text-interactive-text-inverse'] = true
                        cssClass[`bg-interactive-${this.kind}`] = true

                        if(!this.disabled) {
                            cssClass[`hover:bg-interactive-${this.kind}-hover hover:border-interactive-${this.kind}-hover`] = true
                            cssClass[`active:bg-interactive-${this.kind}-active active:border-interactive-${this.kind}-active`] = true
                        }
                    }
                } else {
                    cssClass['border-interactive-secondary text-interactive-text'] = true

                    if(!this.disabled) {
                        cssClass['hover:cursor-pointer hover:bg-interactive-secondary-hover hover:border-interactive-secondary-hover hover:no-underline'] = true
                        cssClass['active:cursor-pointer active:bg-interactive-secondary-active active:border-interactive-secondary-active'] = true
                    }

                    if (this.outline) {
                        cssClass['bg-transparent'] = true
                    } else {
                        cssClass['bg-interactive-secondary'] = true
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
