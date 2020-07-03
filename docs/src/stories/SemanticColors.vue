<template>
    <div>
        <h1 class="tw-text-3xl tw-font-medium tw-mb-2">Semantic Colors</h1>

        <table class="tw-w-full tw-mb-6 tw-border-t tw-border-b tw-border-gray-400 tw-table-collapse">
            <thead>
            <tr>
                <th class="tw-text-left">Color</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <template v-for="(colorValue, colorName) in semanticColors">
                <tr>
                    <td class="tw-border-t tw-border-gray-400">{{colorName}}</td>
                    <td class="tw-w-24 tw-border-t tw-border-gray-400">
                        <div class="color" :class="{['tw-bg-'+colorName]: true}"></div>
                    </td>
                </tr>
            </template>
            </tbody>
        </table>
    </div>
</template>

<script>
    import semanticColors from '../../../src/colors/semanticColors'

    export default {
        computed: {
            semanticColors() {
                return semanticColors
            }
        }
    }
</script>

<style lang="css">
    .color {
        width: 100%;
        height: 40px;
    }
</style>