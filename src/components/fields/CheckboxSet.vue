<template>
    <field :errors="errors" class="checkbox-set">
        <fieldset>
            <legend>{{ label }}</legend>

            <div v-if="instructions" class="instructions">
                <p>{{ instructions }}</p>
            </div>

            <ul>
                <li v-for="(option, index) in this.options" :key="index">
                    <label>
                        <input type="checkbox" v-model="localValue" :value="option.value" @change="$emit('input', localValue)">
                        {{ option.label }}
                    </label>
                </li>
            </ul>
        </fieldset>
    </field>
</template>

<script>
    export default {
        props: ['options', 'label', 'instructions', 'value', 'errors'],

        data() {
            return {
                localValue: []
            }
        },

        mounted() {
            this.localValue = JSON.parse(JSON.stringify(this.value));
        }
    }
</script>

<style lang="scss" scoped>
    .checkbox-set {
        fieldset {
            ul {
                @apply .list-reset .pl-4 .pt-2;

                input {
                    @apply .mr-2;
                }
            }
        }
    }
</style>