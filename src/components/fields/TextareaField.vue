<template>
    <field :id="id + '-label'" :label="label">
        <div v-if="instructions" class="instructions">
            <p>{{ instructions }}</p>
        </div>

        <div class="relative" :class="{'mt-4': max}">
            <div v-if="max"
                 class="text-xs text-right pr-1 absolute" style="right: 0; top: -1rem;"
                 :class="{
                    'text-grey': remainingChars >= 10,
                    'text-orange': remainingChars < 10 && remainingChars >= 0,
                    'text-red': remainingChars < 0
                }">{{ remainingChars }}</div>

            <textarea-input
                    :autocapitalize="autocapitalize"
                    :class="{
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
                    @input="$emit('input', $event)"/>
        </div>

        <div class="invalid-feedback" v-for="(error, key) in errors" :key="key">{{ error }}</div>
    </field>
</template>

<script>
    import Field from '../Field';
    import TextareaInput from '../inputs/TextareaInput';

    export default {

        props: ['label', 'instructions', 'id', 'placeholder', 'value', 'cols', 'rows', 'errors', 'disabled', 'autocapitalize', 'spellcheck', 'size', 'max'],

        components: {
            Field,
            TextareaInput,
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
