<template>
    <AppLayout>
        <PageHeader
            class="mb-6"
        />
        <PromptBox
            v-model="prompt"
            class="mb-10 sticky top-0"
            placeholder="Enter your instruction to generate image"
            @submit="generateMusic"
        />
    </AppLayout>
</template>

<script setup>
    import AppLayout from "@/layout/AppLayout.vue"
    import { useReplicate } from '@/apiServices/useReplicate.js'
    import { ref } from 'vue'
    import { PromptBox, ChatBox, Loader } from '@/plugins/ui'
    import PageHeader from '@/layout/fragments/PageHeader.vue'

    const { generateMusic } = useReplicate()
    const prompt = ref('')
</script>