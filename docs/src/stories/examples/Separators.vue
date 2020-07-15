<template>
    <div class="text-text">
        <h1 :class="`text-3xl font-medium mb-4`">Separators</h1>
        <template v-for="example in examples">
            <div :key="'example.separator-' + example.separator" :class="`mb-8 shadow-lg`">
                <div class="overflow-hidden shadow-xs">
                    <div :class="`px-6 py-4 border-b ${example.background1} border-${example.separator}`">{{example.separator}}</div>
                    <div :class="`flex-1 p-6 h-48 ${example.background2}`"></div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                examples: [
                    {
                        separator: 'separator',
                        background1: 'bg-primary-background',
                        background2: 'bg-secondary-background',
                    },
                    {
                        separator: 'opaque-separator',
                        background1: 'bg-secondary-background',
                        background2: 'bg-tertiary-background',
                    },
                ],
            }
        }
    }
</script>