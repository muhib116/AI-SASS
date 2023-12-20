<template>
    <AppLayout>
        <PageHeader
            class="mb-6"
        />
        <div>
            <PromptBox
                v-model="prompt"
                class="mb-10 sticky top-0"
                placeholder="Enter your instruction to generate image"
                @submit="generateImage(
                    prompt, 
                    getModifiedPrompt(prompt), 
                    imageCount,
                    imageResolution,
                    () => prompt = ''
                )"
            >
                <Select.Primary
                    class="w-[70px]"
                    :options="resolutions"
                    v-model="imageResolution"
                />
                <Select.Primary
                    class="w-[70px]"
                    :options="imageQuantity"
                    v-model="imageCount"
                />
            </PromptBox>

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
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
                    <div
                        v-for="(image, index) in item.content" 
                        :key="index"
                    >
                        <img
                            :src="image.url"
                            class="w-full block aspect-square object-center object-cover"
                        />
                        <a 
                            :href="image.url"
                            download
                            class="px-4 text-center block py-2 rounded-b bg-sky-500 text-white w-full font-bold"
                        >
                            Download
                        </a>
                    </div>
                </div>
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
    import { Select } from '@/plugins/form'
    import { useImageGenerator } from '@/pages/image-generator/useImageGenerator.js'

    const {
        response,
        generateImage,
        loading
    } = useOpenAi()

    const {
        resolutions,
        imageQuantity
    } = useImageGenerator()

    const imageCount = ref(1)
    const imageResolution = ref('256x256')

    const prompt = ref('')
    const getModifiedPrompt = (userPrompt) => {
        return `${userPrompt}`
    }
</script>@/apis/useOpenAi.js