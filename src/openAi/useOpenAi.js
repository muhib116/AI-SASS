import { ref } from 'vue'
import OpenAI from "openai"

export const useOpenAi = () => 
{
  const response = ref('')
  const loading = ref(false)

  const openAi = new OpenAI({
    organization: import.meta.env.VITE_OPEN_AI_ORG_KEY,
    apiKey: import.meta.env.VITE_OPEN_AI_API_KEY,
    dangerouslyAllowBrowser: true
  })

  const submitPrompt = async (prompt, cb) => 
  {
    cb()
    loading.value = true

    const completion = await openAi.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {role: "system", content: "You are muhib."},
        {
          role: "user", 
          content: [
            {
              type: "text",
              text: prompt
            }
          ]
        }
      ],
      stream: true,
    })

    loading.value = false

    for await (const chunk of completion) {
      response.value += chunk.choices[0].delta.content ? chunk.choices[0].delta.content : ''
    }
  }

  return {
    loading,
    response,
    submitPrompt
  }
}