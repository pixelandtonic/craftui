<template>
    <div>
        <label :for="id" class="lightswitch" :class="{disabled: disabled}">
            <input :id="id" type="checkbox" :checked="checked" :disabled="disabled" @input="$emit('update:checked', $event.target.checked)" @change="$emit('change', $event)" />
            <div class="slider round"></div>
        </label>
    </div>
</template>

<script>
    export default {

        props: ['id', 'checked', 'disabled'],

    }

</script>
