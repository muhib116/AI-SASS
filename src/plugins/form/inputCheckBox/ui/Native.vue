<template>
    <Input.Native 
        type="checkbox" 
        :id="uid" 
        v-bind="$attrs" 
        :modelValue="localValue"
        @update:modelValue="setLocalValue"
        class="flex-shrink-0 !w-fit"
        style="visibility: visible;"
    />
</template>

<script setup>
    import { Input } from '@/plugins/form'
    import { inject } from "vue"

    defineProps({
        label: String,
        id: [String, Number]
    })

    const { localValue, setLocalValue } = inject('localValue')
</script>