<template>
    <field :id="id + '-label'" :label="label" :instructions="instructions" :errors="errors" class="c-textarea-field">
        <div class="wrapper">
            <textarea
                    autocomplete="off"
                    class="c-textarea-input"
                    type="text"
                    :autocapitalize="autocapitalize"
                    :class="{
                        'w-full': !size,
                        'is-invalid': errors,
                        'text-red-dark': max && max < this.value.length
                    }"
                    :cols="cols"
                    :disabled="disabled"
                    :id="id"
                    :placeholder="placeholder"
                    :rows="rows ? rows : 4"
                    :spellcheck="spellcheck"
                    :value="value"
                    @input="$emit('input', $event.target.value)"
            >
            </textarea>

            <p v-if="max"
               class="max"
               :class="{
                    'text-grey': remainingChars >= 20,
                    'text-orange': remainingChars < 20 && remainingChars >= 0,
                    'text-red': remainingChars < 0
                }"><small>{{ (max - remainingChars) }}/{{max}}</small></p>
        </div>
    </field>
</template>

<script>
    import Field from './Field.vue';

    export default {
        props: {
            autocapitalize: {
                type: Boolean,
                default: false,
            },
            cols: {
                type: Number,
                default: null,
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            rows: {
                type: Number,
                default: null,
            },
            errors: {
                type: Array,
                default: null,
            },
            id: {
                type: String,
                default: null,
            },
            instructions: {
                type: String,
                default: null,
            },
            label: {
                type: String,
                default: null,
            },
            max: {
                type: Number,
                default: null,
            },
            placeholder: {
                type: String,
                default: null,
            },
            size: {
                size: Number,
                default: null,
            },
            spellcheck: {
                type: Boolean,
                default: false,
            },
            value: {
                type: String,
                default: null,
            },
        },

        components: {
            Field,
        },

        computed: {
            remainingChars() {
                if (this.max) {
                    return this.max - this.value.length
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "../sass/mixins";

    .c-textarea-field {
        .wrapper {
            @apply .relative;

            textarea.c-textarea-input {
                &.w-full {
                    @apply .w-full;
                }
            }

            .text-red-dark {
                @apply .text-red-dark;
            }

            .max {
                @apply .mt-2;
                @include pr(1);

                &.floating {
                    @apply .absolute .text-xs .text-right;
                }

                &.text-grey {
                    @apply .text-grey;
                }

                &.text-orange {
                    @apply .text-orange;
                }

                &.text-red {
                    @apply .text-red;
                }
            }
        }
    }
</style>
