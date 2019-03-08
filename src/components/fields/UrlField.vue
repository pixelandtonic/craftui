<template>
    <field :id="id" :label="label" :instructions="instructions" :errors="errors">
        <url-input
            :autofocus="autofocus"
            :class="{'is-invalid': errors }"
            :disabled="disabled"
            :id="id"
            :placeholder="placeholder" :value="value"
            @input="$emit('input', $event)"
            :size="size"
            ref="input"/>
    </field>
</template>

<script>
    import Field from '../Field.vue';
    import UrlInput from '../inputs/UrlInput.vue';

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
