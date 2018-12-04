<template>
    <div>
        <div class="field">
            <label>
                <!--Must be @change, not @input (Safari issue)-->
                <input :id="id" type="checkbox" class="mr-2" :value="value" :checked="value" @change="$emit('input', $event.target.checked)">
                {{ label }}
            </label>
            <p v-if="instructions" class="text-grey-dark text-sm" v-html="instructions"></p>
            <div class="invalid-feedback" v-for="(error, index) in errors" :key="index">{{ error }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['errors', 'id', 'label', 'value', 'instructions'],
    }
</script>
