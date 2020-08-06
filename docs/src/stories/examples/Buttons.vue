<template>
    <div>
        <h1 class="text-3xl font-medium">Buttons</h1>

        <h2 class="text-2xl font-medium mt-6">Regular</h2>
        <pane class="mt-4 p-8">
            <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
                <btn v-for="(buttonType, key) in buttonTypes" :key="`buttons-1-${key}`" :kind="buttonType">
                    {{buttonType}}
                </btn>
            </div>
        </pane>
        <h2 class="text-2xl font-medium mt-6">Disabled</h2>
        <pane class="mt-4 p-8">
            <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
                <btn v-for="(buttonType, key) in buttonTypes" :key="`buttons-2-${key}`" :kind="buttonType"
                     :disabled="true">
                    {{buttonType}}
                </btn>
            </div>
        </pane>

        <h2 class="text-2xl font-medium mt-6">Icon</h2>
        <pane class="mt-4 p-8">
            <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
                <btn v-for="(buttonType, key) in buttonTypes" :key="`buttons-3-${key}`" :kind="buttonType"
                     icon="plus">
                    {{buttonType}}
                </btn>
            </div>
        </pane>

        <h2 class="text-2xl font-medium mt-6">Loading</h2>
        <pane class="mt-4 p-8">
            <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
                <btn v-for="(buttonType, key) in buttonTypes" :key="`buttons-4-${key}`" :kind="buttonType"
                     :loading="true">
                    {{buttonType}}
                </btn>
            </div>
        </pane>

        <h2 class="text-2xl font-medium mt-6">Outline</h2>
        <pane class="mt-4 p-8">
            <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
                <btn v-for="(buttonType, key) in buttonTypes" :key="`buttons-5-${key}`" :kind="buttonType"
                     :outline="true">
                    {{buttonType}}
                </btn>
            </div>
        </pane>

        <h2 class="text-2xl font-medium mt-6">Outline Loading</h2>
        <pane class="mt-4 p-8">
            <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
                <btn v-for="(buttonType, key) in buttonTypes" :key="`buttons-4-${key}`" :kind="buttonType"
                     :outline="true" :loading="true">
                    {{buttonType}}
                </btn>
            </div>
        </pane>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                buttonTypes: [
                    'primary',
                    'secondary',
                    'tertiary',
                    'success',
                    'danger',
                ]
            }
        }
    }
</script>