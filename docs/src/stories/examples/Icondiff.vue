<template>
    <div>
        <h1 class="text-3xl font-medium">Icondiff</h1>

        <checkbox v-model="missingOnly" label="Only show missing icons"></checkbox>

        <h2 class="text-2xl font-medium mt-6">craft-icons ({{computedCraftIcons.length}})</h2>
        <table class="mt-4 w-full">
            <thead>
            <tr>
                <th class="text-left border-b">craft icon</th>
                <th class="text-left border-b"></th>
                <th class="text-left border-b">heroicon</th>
                <th class="text-left border-b"></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="icon in computedCraftIcons" :class="[{
                    'opacity-25': typeof diff[icon] !== 'undefined'
                }]">
                <td class="border-b">{{icon}}</td>
                <td class="border-b">
                    <img :src="craftIcons[icon]" class="w-4">
                </td>
                <td class="border-b">{{diff[icon]}}</td>
                <td class="border-b">
                    <icon source="heroicons" :icon="diff[icon]" />
                </td>
            </tr>
            </tbody>
        </table>

        <h2 class="text-2xl font-medium mt-6">craft-font ({{computedCraftFont.length}})</h2>
        <table class="mt-4 w-full">
            <thead>
            <tr>
                <th class="text-left border-b">craft icon</th>
                <th class="text-left border-b"></th>
                <th class="text-left border-b">heroicon</th>
                <th class="text-left border-b"></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="icon in computedCraftFont" :class="[{
                    'opacity-25': typeof diff[icon] !== 'undefined'
                }]">
                <td class="border-b">{{icon}}</td>
                <td class="border-b">
                    <img :src="craftFont[icon]" class="w-4">
                </td>
                <td class="border-b">{{diff[icon]}}</td>
                <td class="border-b">
                    <icon source="heroicons" :icon="diff[icon]" />
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import craftIcons from '../../../../src/icondiff/craft-icons'
import customIcons from '../../../../src/icondiff/custom-icons'
import craftFont from '../../../../src/icondiff/craft-font'
import diff from '../../../../src/icondiff/diff'

export default {
    data() {
        return {
            craftIcons,
            craftFont,
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
            return this.getComputedIcons(this.craftIcons)
        },
        
        computedCraftFont() {
            return this.getComputedIcons(this.craftFont)
        }
    }
}
</script>