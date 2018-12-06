<template>
    <div :id="'field-' + id" class="field">
        <label v-if="label" :for="id">{{label}}</label>
        <slot></slot>
    </div>
</template>

<script>
    export default {

        props: ['id', 'label']

    }
</script>