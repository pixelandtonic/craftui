<template>
    <field :id="id" :label="label">
        <div v-if="instructions" class="instructions">
            <p>{{ instructions }}</p>
        </div>

        <password-input
                ref="input"
                :id="id"
                :name="name"
                :class="{'is-invalid': errors }"
                :placeholder="placeholder" :value="value"
                @input="$emit('input', $event)"
                :size="size"
                :autofocus="autofocus" />

        <div class="invalid-feedback" v-for="(error, key) in errors" :key="key">
            {{ error }}
        </div>
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
