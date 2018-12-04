<template>
    <div>
        <fieldset class="checkboxes">
            <legend>{{ label }}</legend>

            <div v-if="instructions" class="instructions">
                <p>{{ instructions }}</p>
            </div>

            <ul class="list-reset pl-4 pt-2">
                <li v-for="(option, index) in this.options" :key="index">
                    <label>
                        <input type="checkbox" class="mr-2" v-model="localValue" :value="option.value" @change="$emit('input', localValue)">
                        {{ option.label }}
                    </label>
                </li>
            </ul>

            <div class="invalid-feedback" v-for="(error, index) in errors" :key="index">{{ error }}</div>
        </fieldset>
    </div>
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
