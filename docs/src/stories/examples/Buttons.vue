<template>
    <div>
        <h1 :class="`text-3xl font-medium`">Buttons</h1>

        <h2 :class="`text-2xl font-medium mt-6 mb-2`">Regular</h2>
        <div class="border p-12 max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
            <btn v-for="buttonType in buttonTypes" :kind="buttonType">
                {{buttonType}}
            </btn>
        </div>
        <h2 :class="`text-2xl font-medium mt-6 mb-2`">Disabled</h2>
        <div class="border p-12 max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
            <btn v-for="buttonType in buttonTypes" :kind="buttonType" :disabled="true">
                {{buttonType}}
            </btn>
        </div>

        <h2 :class="`text-2xl font-medium mt-6 mb-2`">Icon</h2>
        <div class="border p-12 max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
            <btn v-for="buttonType in buttonTypes" :kind="buttonType" icon="plus">
                {{buttonType}}
            </btn>
        </div>

        <h2 :class="`text-2xl font-medium mt-6 mb-2`">Loading</h2>
        <div class="border p-12 max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
            <btn v-for="buttonType in buttonTypes" :kind="buttonType" loading="true">
                {{buttonType}}
            </btn>
        </div>

        <h2 :class="`text-2xl font-medium mt-6 mb-2`">Outline</h2>
        <div class="border p-12 max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
            <btn v-for="buttonType in buttonTypes" :kind="buttonType"
                 outline="true">
                {{buttonType}}
            </btn>
        </div>

        <h2 :class="`text-2xl font-medium mt-6 mb-2`">Outline Loading</h2>
        <div class="border p-12 max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
            <btn v-for="buttonType in buttonTypes" :kind="buttonType"
                 outline="true" loading="true">
                {{buttonType}}
            </btn>
        </div>
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