<template>
    <div>
        <h1>Semantic Colors</h1>

        <table class="w-full mb-6 border-t border-b border-gray-400 table-collapse">
            <thead>
            <tr>
                <th class="text-left">Color</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <template v-for="(colorValue, colorName) in semanticColors">
                <tr>
                    <td class="border-t border-gray-400">{{colorName}}</td>
                    <td class="w-24 border-t border-gray-400">
                        <div class="color" :class="{['bg-'+colorName]: true}"></div>
                    </td>
                </tr>
            </template>
            </tbody>
        </table>
    </div>
</template>

<script>
    import semanticColors from '../../../src/semanticColors'

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