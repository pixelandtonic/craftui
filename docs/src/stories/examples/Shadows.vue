<template>
    <div>
        <h1 :class="`text-3xl font-medium`">Shadows</h1>

        <template v-for="size in shadows">
            <div :key="'shadow-' + size" class="bg-secondary-background p-20 mt-6">
                <div :class="`bg-primary-background p-6 rounded shadow-${size} text-text`">
                    {{size}}
                </div>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                shadows: [
                    'xs',
                    'sm',
                    'default',
                    'md',
                    'lg',
                    'xl',
                    '2xl',
                    'inner',
                    'outline',
                    'none',
                ],
            }
        }
    }
</script>