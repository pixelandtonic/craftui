<template>
    <div>
        <h1 :class="`text-3xl font-medium`">Badges</h1>

        <h2 :class="`text-2xl font-medium mt-6`">Regular</h2>
        <pane class="mt-4 p-8">
            <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
                <badge v-for="(badgeType, key) in badgeTypes" :key="`badges-1-${key}`" :type="badgeType">{{badgeType}}</badge>
            </div>
        </pane>

        <h2 :class="`text-2xl font-medium mt-6`">Large</h2>
        <pane class="mt-4 p-8">
            <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
                <badge v-for="(badgeType, key) in badgeTypes" :key="`badges-2-${key}`" :type="badgeType" large>{{badgeType}}</badge>
            </div>
        </pane>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                badgeTypes: [
                    'default',
                    'info',
                    'success',
                    'warning',
                    'danger',
                ]
            }
        }
    }
</script>