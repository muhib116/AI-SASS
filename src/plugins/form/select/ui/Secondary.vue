<template>
    <Base
        labelClass="text-primary-one block mb-3 text-lg"
        inputClass="h-[50px] !text-lg font-light border border-secondary-five px-6 py-3 block w-full rounded-lg disabled:bg-gray-100 disabled:opacity-60"
        :options="options"
        :label="label"
        v-model="_modelValue"
        v-bind="$attrs"
        :itemKey="itemKey"
        :itemValue="itemValue"
        :labelStyle="labelStyle"
        :inputStyle="inputStyle"
        :bgStyle="bgStyle"
    />
</template>

<script setup>
    import Base from '@/plugins/form/select/Base.vue'

    defineOptions({
        name: 'Secondary Select',
        inheritAttrs: false,
    })

    defineProps({
        label: String,
        options: Array,
        itemKey: String,
        itemValue: String,
        labelStyle: Object,
        inputStyle: Object,
        bgStyle: Object,
    })
    const _modelValue = defineModel()
</script>
