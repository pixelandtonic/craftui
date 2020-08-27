<template>
    <div>
        <h1 class="text-3xl font-medium">Icons</h1>

        <div class="mt-2">
            <textbox v-model="q" placeholder="Filter icons"></textbox>
        </div>

        <div v-for="(source, sourceKey) in sources" :key="'source' + sourceKey">
            <h2 class="text-2xl font-medium mt-6">{{ sourceKey }} ({{filteredIcons(source).length}})</h2>
            <div class="mt-4 grid grid-cols-6 gap-6">
                <div v-for="(icon, iconKey) in filteredIcons(source)" :key="'icons' + sourceKey + iconKey" class="text-center">
                    <icon :source="`${sourceKey}`" :icon="icon" size="lg"></icon>
                    <div class="text-sm">{{ icon }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import craftIcons from '../../../../src/icons/craft/vue'
    import heroSolid from '../../../../src/icons/heroicons/vue/solid'
    import heroOutline from '../../../../src/icons/heroicons/vue/outline'

    export default {
        data() {
            return {
                q: '',
                sources: {
                    'craft': Object.keys(craftIcons),
                    'heroicons/solid': Object.keys(heroSolid),
                    'heroicons/outline': Object.keys(heroOutline),
                },
            }
        },

        computed: {
            filteredIcons() {
                return (icons) => {
                    return icons.filter(icon => icon.includes(this.q));
                }
            }
        }
    }
</script>