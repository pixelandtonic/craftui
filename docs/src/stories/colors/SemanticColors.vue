<template>
    <div id="semantic-colors">
        <div class="flex justify-between items-center">
            <h1 class="text-3xl font-medium">Semantic Colors</h1>
            <div class="text-light-text text-sm">{{totalColors}} colors</div>
        </div>

        <div class="mt-6">
            <textbox placeholder="Filter colors…" v-model="searchQuery" autocomplete="off"></textbox>
        </div>

        <pane type="table" class="mt-6">
            <table>
                <thead>
                <tr>
                    <th>Color</th>
                    <th class="w-1/4">Light</th>
                    <th class="w-1/4">Dark</th>
                </tr>
                </thead>
                <tbody>
                <template v-for="(colorValue, colorName) in filteredColors">
                    <tr>
                        <td>{{colorName}}</td>
                        <td class="lowercase text-light-text">
                            <div class="flex items-center">
                                <div class="block flex-shrink-0 w-12 h-12 rounded shadow-inner mr-4" :style="`background-color: ${colorValue.light};`"></div>

                                {{colorValue.light}}
                            </div>
                        </td>
                        <td class="lowercase text-light-text">
                            <div class="flex items-center">
                                <div class="block flex-shrink-0 w-12 h-12 rounded shadow-inner mr-4" :style="`background-color: ${colorValue.dark};`"></div>

                                {{colorValue.dark}}
                            </div>
                        </td>
                    </tr>
                </template>
                </tbody>
            </table>
        </pane>
    </div>
</template>

<script>
    import createSemanticColors from '../../../../tailwind/utils/createSemanticColors'
    import colors from '../../../../tailwind/colors/colors'
    const semanticColors = createSemanticColors(colors)

    export default {
        data() {
            return {
                searchQuery: '',
            }
        },

        computed: {
            filteredColors() {
                let filteredColors = {}

                for (const property in semanticColors) {
                    let match = false

                    if (property.includes(this.searchQuery)) {
                        match = true
                    }

                    if (match) {
                        filteredColors[property] = semanticColors[property]
                    }
                }

                return filteredColors
            },

            totalColors() {
                return Object.keys(this.filteredColors).length
            }
        }
    }
</script>

<style>
    #semantic-colors div.c-pane table td {
        padding: 0.5rem 1.5rem;
    }
</style>