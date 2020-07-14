<template>
    <div>
        <h1 :class="`text-3xl font-medium mb-2`">Base</h1>

        <template v-for="base in bases">
            <div :key="'base-' + base" :class="`inline-flex rounded items-center justify-center mr-2 w-24 h-24 text-text-inverse bg-${base}`">
                <div>{{base}}</div>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                bases: [
                    'danger',
                    'icon',
                    'info',
                    'success',
                    'warning',
                ],
            }
        }
    }
</script>