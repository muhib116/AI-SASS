<template>
    <AppLayout>
        <PageHeader
            class="mb-6"
        />
        <div class="relative">
            <PromptBox
                v-model="prompt"
                @submit="submitPrompt(prompt, getModifiedPrompt(prompt), systemPrompt, () => prompt = '')"
                class="mb-10 sticky top-0"
            />

            <Loader
                :active="loading"
                content="Ai generating the content..."
                class="absolute inset-1/2 z-40"
            />

            <div 
                v-for="(item, index) in response"
                :key="index"
                class="grid gap-6 mb-6"
            >
                <ChatBox
                    :content="item.prompt"
                />
                <ChatBox
                    type="content"
                    :content="item.content"
                />
            </div>
        </div>
    </AppLayout>
</template>

<script setup>
    import { ref } from 'vue'
    import AppLayout from "@/layout/AppLayout.vue"
    import { useOpenAi } from '@/apiServices/useOpenAi.js'
    import { PromptBox, ChatBox, Loader } from '@/plugins/ui'
    import PageHeader from '@/layout/fragments/PageHeader.vue'

    const {
        response,
        submitPrompt,
        loading
    } = useOpenAi()

    const prompt = ref('')
    const systemPrompt = ''
    
    const getModifiedPrompt = (userPrompt) => {
        return `give response like chatGpt in details: ${userPrompt}`
    }
</script>@/apis/useOpenAi.js