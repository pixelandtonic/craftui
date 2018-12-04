<template>
    <textarea
            :cols="cols"
            :disabled="disabled"
            :id="id"
            :placeholder="placeholder"
            :value="value"
            @input="$emit('input', $event.target.value)"
            :autocapitalize="autocapitalize"
            :spellcheck="spellcheck"
            autocomplete="off"
            :class="{'w-full': !size }"
            type="text">
    </textarea>
</template>

<script>
    export default {

        props: ['id', 'placeholder', 'value', 'cols', 'disabled', 'autocapitalize', 'spellcheck', 'size'],

    }
</script>
