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
                placeholder="Enter your keyword to generate post title"
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
        loading
    } = useOpenAi()

    const prompt = ref('')
    const systemPrompt = `
        Generate an HTML list of blog post titles that are compelling, SEO-friendly, and engaging, with the potential to go viral and increase click-through rates (CTR). When crafting titles, take into account the following considerations:

        Ensure relevance to the topic or keyword.
        Utilize engaging and attention-grabbing language.
        Optimize for search engines.
        Keep titles concise, aiming for around 60 characters.
        Incorporate key terms users might search for.
        Aim to appeal to a broad audience.
        Format each title as an item in an HTML list (<ul> or <ol>) with each title enclosed in an <h3> tag and a margin-bottom of 20px. Generate a diverse list of titles that strike a balance between informativeness and attractiveness, with the primary goal of encouraging click-through and fostering reader engagement.
    `
    const getModifiedPrompt = (userPrompt) => {
        return userPrompt
    }
</script>@/apis/useOpenAi.js