<template>
    <div :id="'field-' + id" class="field">
        <label v-if="label" :for="id">{{label}}</label>

        <div v-if="instructions" class="instructions">
            <p>{{ instructions }}</p>
        </div>

        <slot></slot>

        <div class="invalid-feedback" v-for="(error, key) in errors" :key="key">
            {{ error }}
        </div>
    </div>
</template>

<script>
    export default {

        props: ['id', 'label', 'instructions', 'errors']

    }
</script>