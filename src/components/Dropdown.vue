<template>
    <div class="c-dropdown" :class="{'is-invalid': invalid}">
        <div class="select">
            <select class="form-select sm:text-sm sm:leading-5 border bg-field-background" :disabled="disabled" :value="value" :class="{
                'w-full': fullwidth,
                'border-red-500': invalid,
                'border-field-separator': !invalid,
            }" @input="$emit('input', $event.target[$event.target.selectedIndex].value)">
                <option v-for="(option, key) in options" :value="option.value" :key="key">{{ option.label }}</option>
            </select>
        </div>
    </div>
</template>


<script>
    import Field from './Field.vue';

    export default {
        props: {
            disabled: {
                type: Boolean,
                default: false,
            },
            invalid: {
                type: Boolean,
                default: false,
            },
            fullwidth: {
                type: Boolean,
                default: false,
            },
            id: {
                type: String,
                default: function () {
                    return 'c-dropdown-id-' + this._uid;
                },
            },
            options: {
                type: Array,
                default: null,
            },
            value: {
                type: String | Number,
                default: null,
            },
        },

        components: {
            Field,
        },
    }
</script>

