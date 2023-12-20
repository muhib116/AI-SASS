<template>
    <div class="flex gap-2">
        <Input.Native 
            type="radio" 
            v-bind="$attrs" 
            :modelValue="localValue"
            @update:modelValue="setLocalValue"
            class="flex-shrink-0 !w-fit"
        />
    </div>
</template>

<script setup>
    import { Label, Input } from '@/plugins/form'
    import { inject } from "vue"

    defineOptions({
        inheritAttr: false
    })

    defineProps({
        label: String,
    })

    const { localValue, setLocalValue } = inject('localValue')
</script>