<template>
    <div>
        <component
            :width="size"
            :is="iconComponent"
            :size="size"
            :color="color"
            :weight="weight"
        />
    </div>
</template>

<script setup>
    import { ref, watchEffect } from 'vue'

    defineOptions({
        name: 'iconComponent',
    })
    const props = defineProps({
        name: String,
        weight: {
            type: String,
            default: "normal"
        },
        custom: {
            type: Boolean,
            default: false
        },
        size: {
            type: [String, Number],
            default: 25
        },
        color: {
            type: String,
            default: ''
        }
    })

    const iconComponent = ref()


    const loadIcon = async (iconName) => {
        if(props.custom){
            const icons = await import('@/icons')
            iconComponent.value = icons[iconName]
            return
        }

        const icons = await import('@phosphor-icons/vue')
        iconComponent.value = icons[iconName]
    }
    watchEffect(() => {
        if(!props.name) return
        let iconName = props.name.split('-')
                        .map(item => {
                            return `${item.charAt(0).toUpperCase()}${item.slice(1)}`
                        }).join('')

        iconName = props.custom ? iconName : `Ph${iconName}`
        loadIcon(iconName)
    })
</script>