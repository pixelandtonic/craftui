<template>
    <div>
        <label :for="id" class="lightswitch" :class="{disabled: disabled}">
            <input :id="id" type="checkbox" :checked="checked" :disabled="disabled" @change="onChange" />
            <div class="slider round"></div>
        </label>
    </div>
</template>

<script>
    export default {

        props: ['id', 'checked', 'disabled'],

        methods: {
            onChange($event) {
                this.$emit('update:checked', $event.target.checked)
                this.$emit('change', $event.target.checked)
            },
        }

    }

</script>
