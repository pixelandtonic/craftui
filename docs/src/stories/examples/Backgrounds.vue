<template>
    <div>
        <h1 class="text-3xl font-medium">Backgrounds</h1>
        <template v-for="background in backgrounds">
            <div :key="'background-' + background" :class="`mt-6 p-32 border border-separator text-center bg-${background}`">{{background}}</div>
        </template>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                backgrounds: [
                    'primary-background',
                    'secondary-background',
                    'tertiary-background',
                ],
            }
        }
    }
</script>