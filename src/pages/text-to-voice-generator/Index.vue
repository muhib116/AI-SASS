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
                placeholder="Enter your instruction to generate code"
            />

            <Loader
                :active="loading"
                content="Ai generating the code..."
            />
            <button class="codeCopyButton">copy</button>
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
    //const systemPrompt = 'You will be provided with a piece of code, and your task is to explain it in a concise way.'
    const systemPrompt = `
        Generate code snippets along with explanations based on the provided text. Given a natural language description or requirement, produce clear and concise code that fulfills the specified task. Include explanatory comments in the generated code to clarify the purpose and functionality of each section. Ensure that the code is well-structured, follows best practices, and is easily understandable. Aim for a balance between code simplicity and comprehensiveness in the explanations. The goal is to create code that is not only functional but also serves as a learning resource for understanding the underlying logic and implementation.
        put all the code inside pre tags
    `
    const getModifiedPrompt = (userPrompt) => {
        return `${userPrompt}`
    }
</script>@/apis/useOpenAi.js