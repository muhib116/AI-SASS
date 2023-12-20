<template>
    <Base
        labelClass="text-red-500"
        inputClass="py-2 px-3 pr-3 rounded block w-full bg-transparent border border-secondary-five"
        :options="options"
        :label="label"
        v-model="_modelValue"
        v-bind="$attrs"
        :itemKey="itemKey"
        :itemValue="itemValue"
    />
</template>

<script setup>
    import Base from '@/plugins/form/select/Base.vue'
    import { provide } from 'vue'

    defineOptions({
        name: 'PrimarySelect',
        inheritAttrs: false
    })

    defineProps({
        label: String,
        options: Array,
        itemKey: String,
        itemValue: String,
    })
    const _modelValue = defineModel()
</script>
