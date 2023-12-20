<template>
    <AppLayout>
        <PageHeader
            class="mb-6"
        />
        <div>
            <PromptBox
                v-model="prompt"
                @submit="submitPrompt(prompt, getModifiedPrompt(prompt), systemPrompt, () => prompt = '')"
                class="mb-10 sticky top-0"
                placeholder="Enter your keyword to generate youtube title"
            />

            <Loader
                :active="loading"
                content="Ai generating the content..."
            />

            <div 
                v-for="(item, index) in response"
                :key="index"
                class="grid gap-6 mb-6"
            >
                <ChatBox
                    :content="item.prompt"
                    :markdown="false"
                />
                <ChatBox
                    type="content"
                    :content="item.content"
                    :markdown="false"
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
        submitPrompt,
        loading,
    } = useOpenAi()

    const prompt = ref('')
    const systemPrompt = `
        Given a keyword, your task is to craft compelling SEO-friendly YouTube video titles for the keyword. Present each title as an HTML numbered list (<ol>). Ensure that each title is not only engaging but also optimized for search engines. Aim for around 60 characters and consider including key terms that users might search for in relation to the topic. Make each title both informative and enticing to improve click-through rates.

        Format each title as an item in the HTML list, using appropriate heading tags (e.g., <h3>) with a margin-bottom of 20px. Generate a diverse list of titles that balance informativeness and attractiveness, with the primary goal of encouraging click-through and engaging viewers.
    `
    const getModifiedPrompt = (userPrompt) => {
        return userPrompt
    }
</script>