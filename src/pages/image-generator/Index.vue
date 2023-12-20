<template>
    <AppLayout>
        <PageHeader
            class="mb-6"
        />
        <div>
            <PromptBox
                v-model="prompt"
                @submit="generateImage(prompt, getModifiedPrompt(prompt), () => prompt = '')"
                class="mb-10 sticky top-0"
                placeholder="Enter your instruction to generate image"
            />

            <Loader
                :active="loading"
                content="Ai generating the image..."
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
    import { useOpenAi } from '@/openAi/useOpenAi.js'
    import { PromptBox, ChatBox, Loader } from '@/plugins/ui'
    import PageHeader from '@/layout/fragments/PageHeader.vue'

    const {
        response,
        generateImage,
        loading
    } = useOpenAi()

    const prompt = ref('')
    const getModifiedPrompt = (userPrompt) => {
        return `${userPrompt}`
    }
</script>