<template>
    <div>
        <h3 v-if="label">{{ label }}</h3>
        <div class="flex gap-4" :class="vertical ? 'flex-col justify-start' : ''">
            <slot></slot>
        </div>
    </div>
</template>
  
<script setup>
    import { provide } from 'vue'
    defineProps({
        label: String,
        vertical: String,
    })

    const localValue = defineModel()
    const setLocalValue = (value) => {
        localValue.value = value
    }
    provide('localValue', {
        localValue,
        setLocalValue
    })
</script>