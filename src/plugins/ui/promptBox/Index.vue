<template>
    <div class="flex items-center gap-4 border p-4 px-6 bg-white font-light rounded">
        <textarea 
            ref="textarea"
            class="block w-full border-0 bg-transparent outline-none ring-0 text-inherit resize-none"
            placeholder="write your query..."
            v-model="localModel"
            @keydown.enter="handleKeyDown"
        />
        <button 
            @click="$emit('submit')"
            class="bg-red-400 shadow hover:bg-red-500 duration-300 text-white px-4 py-2 rounded"
        >
            Generate
        </button>
    </div>
</template>

<script setup>
    import { watch } from 'vue'
    import { useTextareaAutosize } from '@vueuse/core'
    const { textarea, input } = useTextareaAutosize()
    
    const emit = defineEmits(['submit'])
    const handleKeyDown = (event) => {
      if (event.key === 'Enter' && !event.shiftKey) {
          emit('submit')
        event.preventDefault()
      }
    }

    /*global defineModel*/
    const localModel = defineModel()

    watch(localModel, (value) => {
        input.value = value
    }, { immediate: true })
</script>