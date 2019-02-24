<template>
    <field :id="id" :label="label">
        <div v-if="instructions" class="instructions">
            <p>{{ instructions }}</p>
        </div>

        <div class="wrapper">
            <text-input
                    :autofocus="autofocus"
                    :class="{
                        'is-invalid': errors,
                        'text-red-dark': max && max < this.value.length
                    }"
                    :disabled="disabled"
                    :id="id"
                    :name="name"
                    :placeholder="placeholder"
                    :value="value"
                    :mask="mask"
                    @input="$emit('input', $event)"
                    :autocapitalize="autocapitalize"
                    :spellcheck="spellcheck"
                    :readonly="readonly"
                    ref="input"/>

            <p v-if="max"
               class="max"
               :class="{
                    'text-grey': remainingChars >= 20,
                    'text-orange': remainingChars < 20 && remainingChars >= 0,
                    'text-red': remainingChars < 0
                }">{{ remainingChars }} character{{ remainingChars > 1 || remainingChars < 1 ? 's' : ''}} left.</p>
        </div>

        <div class="invalid-feedback" v-for="(error, key) in errors" :key="key">
            {{ error }}
        </div>
    </field>
</template>

<script>
    import Field from '../Field.vue';
    import TextInput from '../inputs/TextInput.vue';

    export default {

        props: ['label', 'id', 'name', 'placeholder', 'value', 'autofocus', 'errors', 'disabled', 'instructions', 'mask', 'autocapitalize', 'spellcheck', 'readonly', 'size', 'max'],

        components: {
            Field,
            TextInput,
        },

        computed: {
            remainingChars() {
                if (this.max) {
                    return this.max - this.value.length
                }
            }
        },

        created() {
            this.$on('focus', function() {
                this.$refs.input.$emit('focus');
            })
        }

    }
</script>

<style lang="scss" scoped>
    .wrapper {
        @apply .relative;

        .text-red-dark {
            @apply .text-red-dark;
        }

        .max {
            @apply .pr-1 .mt-2;

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
</style>
