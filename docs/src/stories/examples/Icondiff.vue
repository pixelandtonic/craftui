<template>
    <div>
        <h1 class="text-3xl font-medium">Icondiff ({{ computedCraftIcons.length }})</h1>

        <checkbox v-model="missingOnly" label="Only show missing icons"></checkbox>

        <table class="mt-4 w-full">
            <thead>
            <tr>
                <th class="py-2 text-left border-b">craft icon</th>
                <th class="py-2 text-left border-b"></th>
                <th class="py-2 text-left border-b">heroicon</th>
                <th class="py-2 text-left border-b"></th>
                <th class="py-2 text-left border-b"></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="icon in computedCraftIcons" :class="[{
                    'opacity-25': typeof diff[icon] !== 'undefined'
                }]">
                <td class="py-2 border-b">{{icon}}</td>
                <td class="py-2 border-b">
                    <icon source="craft" :icon="icon" :size="5" />
                </td>
                <td class="py-2 border-b">{{diff[icon]}}</td>
                <td class="py-2 border-b">
                    <icon source="heroicons/solid" :icon="diff[icon]" :size="5" />
                </td>
                <td class="py-2 border-b">
                    <icon source="heroicons/outline" :icon="diff[icon]" :size="5" />
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import craftIcons from '../../../../src/icons/craft/vue'
import customIcons from '../../../../src/icondiff/custom-icons'
import diff from '../../../../src/icondiff/diff'

export default {
    data() {
        return {
            craftIcons,
            diff,
            missingOnly: false,
        }
    },

    methods: {
        getComputedIcons(sourceIcons) {
            const icons = Object.keys(sourceIcons).filter((icon) => {
                return !customIcons.find((customIcon) => customIcon === icon)
            })

            if (!this.missingOnly) {
                return icons
            }

            return icons.filter((icon) => {
                return typeof this.diff[icon] === 'undefined'
            })
        }
    },

    computed: {
        computedCraftIcons() {
            console.log('this.craftIcons', this.craftIcons)
            return this.getComputedIcons(this.craftIcons)
        },
    }
}
</script>