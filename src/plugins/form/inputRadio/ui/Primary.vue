<template>
    <Base
        :value="value"
        v-model="modelValue"
    />
</template>

<script setup>
    import Base from '@/plugins/form/inputRadio/Base.vue'

    defineProps({
        value: String
    })

    const modelValue = defineModel()
</script>