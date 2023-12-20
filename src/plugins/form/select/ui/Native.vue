<template>
    <select
        class="max-w-full bg-transparent outline-none"
        :class="inputClass"
        v-model="_modelValue"
    >
        <option :value="null">{{ defaultOption }}</option>
        <option
            v-for="(item, index) in options"
            :key="index"
            :value="item[itemKey]"
        >
            {{ item[itemValue] }}
        </option>
    </select>
</template>

<script setup>
    defineProps({
        options: Array,
        itemValue: {
            type: String,
            default: 'title',
        },
        itemKey: {
            type: String,
            default: 'id',
        },
        wrapperClass: String,
        inputClass: String,
        iconClass: String,
        defaultOption: {
            type: String,
            default: 'Select',
        },
    })
    defineOptions({
        name: 'Native Select',
    })

    const _modelValue = defineModel()
</script>
