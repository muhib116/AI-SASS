<template>
    <AppLayout>
        <PageHeader
            class="mb-6"
        />
        <div>
            <PromptBox
                v-model="keyword"
                @submit="submitPrompt(prompt, () => keyword = '')"
                class="mb-10 sticky top-0"
                placeholder="Enter your keyword to generate post title"
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
    import { ref, computed } from 'vue'
    import AppLayout from "@/layout/AppLayout.vue"
    import { useOpenAi } from '@/openAi/useOpenAi.js'
    import { PromptBox, Markdown, Loader } from '@/plugins/ui'
    import PageHeader from '@/layout/fragments/PageHeader.vue'

    const {
        response,
        submitPrompt,
        loading
    } = useOpenAi()

    const keyword = ref('')
    const prompt = computed(() => {
        return `Craft 5 compelling SEO-friendly post title for the keyword '${keyword.value}, as html ordered list with emoji.' Ensure the title is not only engaging but also optimized for search engines. Aim for around 60 characters and consider including key terms that users might search for in relation to the topic. Make the title both informative and enticing to improve click-through rates.`
    })
</script>