<template>
    <field :id="id" :label="label" :instructions="instructions" :errors="errors" class="c-password-field">
        <password-input
                ref="input"
                :id="id"
                :name="name"
                :class="{'is-invalid': errors }"
                :placeholder="placeholder" :value="value"
                @input="$emit('input', $event)"
                :size="size"
                :autofocus="autofocus" />
    </field>
</template>

<script>
    import Field from '../Field.vue';
    import PasswordInput from '../inputs/PasswordInput.vue';

    export default {
        props: ['label', 'id', 'name', 'placeholder', 'value', 'autofocus', 'errors', 'size', 'instructions'],

        components: {
            Field,
            PasswordInput,
        },

        created() {
            this.$on('focus', function() {
                this.$refs.input.$emit('focus');
            })
        }

    }
</script>
