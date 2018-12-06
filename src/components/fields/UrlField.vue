<template>
    <field :id="id" :label="label">
        <div v-if="instructions" class="instructions">
            <p>{{ instructions }}</p>
        </div>

        <url-input
            :autofocus="autofocus"
            :class="{'is-invalid': errors }"
            :disabled="disabled"
            :id="id"
            :placeholder="placeholder" :value="value"
            @input="$emit('input', $event)"
            :size="size"
            ref="input"/>

        <div class="invalid-feedback" v-for="(error, key) in errors" :key="key">
            {{ error }}
        </div>
    </field>
</template>

<script>
    import Field from '../Field';
    import UrlInput from '../inputs/UrlInput';

    export default {

        props: ['label', 'id', 'placeholder', 'value', 'autofocus', 'errors', 'disabled', 'instructions', 'size'],

        components: {
            Field,
            UrlInput,
        },

        created() {
            this.$on('focus', function() {
                this.$refs.input.$emit('focus');
            })
        }

    }
</script>
