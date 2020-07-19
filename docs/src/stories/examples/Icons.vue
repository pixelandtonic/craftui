<template>
    <div>
        <h1 :class="`text-3xl font-medium`">Icons</h1>

        <div class="mt-6 grid grid-cols-8 gap-6">
            <div v-for="(icon, key) in icons" :key="key">
                <icon :icon="icon"></icon>
            </div>
        </div>
    </div>
</template>

<script>
    import icons from '../../../../src/sprites/icons'

    export default {
        computed: {
            icons() {
                return icons
            }
        }
    }
</script>