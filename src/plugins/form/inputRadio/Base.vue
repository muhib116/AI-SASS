<template>
    <label 
        class="flex gap-[6px] relative items-center"
        :class="localValue == value ? 'opacity-100' : 'opacity-40'"
    >
        <Input.Native 
            type="radio" 
            :id="uid" 
            v-bind="$attrs"
            :modelValue="localValue"
            @update:modelValue="setLocalValue"
            class="!w-fit absolute opacity-0"
            :value="value"
        />
        <Icon
            v-if="localValue == value"
            name="Radio" 
            source="custom" 
            class="w-4 h-4"
        />
        <Icon
            v-else
            name="Circle" 
            source="custom" 
            class="w-4 h-4"
        />

        <Label :for="uid">
            {{ label }}
        </Label>
    </label>
</template>

<script setup>
    import { Label, Input } from '@/plugins/form'
    import { inject } from "vue"
    import { useForm } from '@/plugins/form/useForm.js'
    import { Icon } from '@/plugins/ui'

    const { uid } = useForm()
    defineOptions({
        inheritAttr: false
    })

    defineProps({
        label: String,
        value: String
    })

    const { localValue, setLocalValue } = inject('localValue')
</script>