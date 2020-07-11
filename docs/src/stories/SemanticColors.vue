<template>
    <div>
        <h1 :class="`${PREFIX}text-3xl ${PREFIX}font-medium ${PREFIX}mb-2`">Semantic Colors</h1>

        <table :class="`${PREFIX}w-full ${PREFIX}mb-6 ${PREFIX}border-t ${PREFIX}border-b ${PREFIX}border-gray-400 ${PREFIX}table-collapse`">
            <thead>
            <tr>
                <th :class="`${PREFIX}text-left`">Color</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <template v-for="(colorValue, colorName) in semanticColors">
                <tr>
                    <td :class="`${PREFIX}border-t ${PREFIX}border-gray-400`">{{colorName}}</td>
                    <td :class="`${PREFIX}w-24 ${PREFIX}border-t ${PREFIX}border-gray-400`">
                        <div class="color" :class="{
                            [`${PREFIX}bg-${colorName}`]: true
                        }"></div>
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