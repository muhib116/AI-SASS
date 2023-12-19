<template>
    <AppLayout>
        <div>
            <PromptBox
                v-model="prompt"
                @submit="submitPrompt(prompt, () => prompt = '')"
                class="mb-10 sticky top-0"
            />

            <Loader
                :active="loading"
                content="ai is thinking"
            />

            <Markdown
                :content="response"
            />
        </div>
    </AppLayout>
</template>

<script setup>
    import { ref } from 'vue'
    import AppLayout from "@/layout/AppLayout.vue"
    import { useOpenAi } from '@/openAi/useOpenAi.js'
    import { PromptBox, Markdown, Loader } from '@/plugins/ui'

    const {
        response,
        submitPrompt,
        loading
    } = useOpenAi()

    const prompt = ref('')
</script>