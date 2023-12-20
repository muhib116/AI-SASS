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
                placeholder="Enter your keyword to get video idea"
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
    import { useOpenAi } from '@/apiServices/useOpenAi.js'
    import { PromptBox, ChatBox, Loader } from '@/plugins/ui'
    import PageHeader from '@/layout/fragments/PageHeader.vue'

    const {
        response,
        submitPrompt,
        loading,
    } = useOpenAi()

    const prompt = ref('')
    const systemPrompt = `
        Generate YouTube video ideas that are SEO-friendly, attractive, and engaging to maximize click-through rates (CTR) and encourage virality. Consider incorporating trending topics, key search terms, and compelling titles to optimize for search engines. Ensure the content is diverse, appeals to a broad audience, and provides value. Suggest unique angles or approaches that can make the videos stand out in the crowded online space. The goal is to generate content ideas that not only capture viewer attention but also have the potential to go viral, ultimately boosting CTR.

        For each idea:

        Wrap the title with <h3> tags.
        Provide meta tags related to the title, separated by commas and make it semibold.
        Include a video description.
        Wrap the entire content idea in a <div style='margin-bottom: 20px'></div>.
        Ensure that each content idea is numbered, and add an extra 20px margin after each idea for clarity.
        every title, meta tags and video description should prefix with his related name
    `
    const getModifiedPrompt = (userPrompt) => {
        return userPrompt
    }
</script>@/apis/useOpenAi.js