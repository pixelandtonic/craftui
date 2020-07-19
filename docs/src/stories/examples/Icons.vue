<template>
    <div>
        <h1 :class="`text-3xl font-medium`">Icons</h1>

        <h2 :class="`text-2xl font-medium mt-6`">Regular</h2>
        <div class="mt-4 grid grid-cols-8 gap-6">
            <div v-for="(icon, key) in regularIcons" :key="'regular' + key">
                <icon :icon="icon"></icon>
            </div>
        </div>

        <h2 :class="`text-2xl font-medium mt-6`">Light</h2>
        <div class="mt-4 grid grid-cols-8 gap-6">
            <div v-for="(icon, key) in lightIcons" :key="'light-' + key">
                <icon :icon="icon" set="light"></icon>
            </div>
        </div>
    </div>
</template>

<script>
    import regularIcons from '../../../../src/sprites/regular'
    import lightIcons from '../../../../src/sprites/light'

    export default {
        computed: {
            regularIcons() {
                return regularIcons
            },
            lightIcons() {
                return lightIcons
            }
        }
    }
</script>