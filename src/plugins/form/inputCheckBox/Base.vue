<template>
    <div class="flex gap-2">
        <Input.Native 
            type="checkbox" 
            :id="uid" 
            v-bind="$attrs" 
            :modelValue="localValue"
            @update:modelValue="setLocalValue"
            class="flex-shrink-0 !w-fit"
            style="visibility: visible;"
        />
        <Label :for="uid">
            {{ label }}
        </Label>
    </div>
</template>

<script setup>
    import { Label, Input } from '@/plugins/form'
    import { inject } from "vue"
    import { useForm } from '@/plugins/form/useForm.js'

    const { uid } = useForm()

    defineProps({
        label: String,
        id: [String, Number]
    })

    const { localValue, setLocalValue } = inject('localValue')
</script>