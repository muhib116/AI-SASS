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
    import { useOpenAi } from '@/apiServices/useOpenAi.js'
    import { PromptBox, ChatBox, Loader } from '@/plugins/ui'
    import PageHeader from '@/layout/fragments/PageHeader.vue'

    const {
        response,
        submitPrompt,
        loading,
    } = useOpenAi()

    const prompt = ref('')
    const systemPrompt = "Generate blog post ideas centered around the provided keyword. For each idea, provide short titles and subtitles on separate lines to present creative and engaging concepts likely to captivate readers. Consider incorporating elements such as trending topics, informative content, entertainment value, and reader engagement. Ensure that the ideas are diverse and appeal to a broad audience. If possible, suggest unique angles or approaches to make the blog posts stand out in the competitive online space. The goal is to generate compelling content ideas that are both relevant to the keyword and have the potential to gain popularity or go viral. Separate the title, subtitle and meta title as a new line for each idea. Output each idea in HTML format using h3 heading tags for the titles, h4 tags for subtitle and p tags for meta title. and wrap every title, subtitle and meta title with a div tag that has 20px margin in bottom, and mark title as title, subtitle as subtitle and meta-title as meta-title prefix and add numbering with every content idea"
    const getModifiedPrompt = (userPrompt) => {
        return userPrompt
    }
</script>@/apis/useOpenAi.js