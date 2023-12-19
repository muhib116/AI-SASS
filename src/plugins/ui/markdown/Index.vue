<template>
    <div v-html="result"></div>
</template>

<script setup>
    import { computed } from 'vue'
    import markdownit from 'markdown-it'
    const props = defineProps({
        content: String
    })

    const md = markdownit()
    const result = computed(() => md.render(props.content))
</script>