import { ref } from 'vue'
import OpenAI from 'openai'
import hljs from 'highlight.js'

export const useOpenAi = () => {
  const response = ref([])
  const loading = ref(false)
  const model = ref('gpt-3.5-turbo')
  const openAi = new OpenAI({
    organization: import.meta.env.VITE_OPEN_AI_ORG_KEY,
    apiKey: import.meta.env.VITE_OPEN_AI_API_KEY,
    dangerouslyAllowBrowser: true
  })

  const generateImage = async (userPrompt, modifiedPrompt, imgCount, resolution, cb) => {
    cb()
    loading.value = true
    const image = await openAi.images.generate({
      model: "dall-e-2", 
      prompt: modifiedPrompt,
      n: +imgCount,
      size: resolution
    })

    response.value.unshift({
      prompt: userPrompt,
      content: ''
    })

    response.value[0].content = image.data
    loading.value = false
  }

  function _copyToClipboard(element) {
    let elem = document.querySelector('.'+element)
    if(elem) {
      let text = elem.innerText
      navigator.clipboard.writeText(text)
        .then(() => {
          console.log('Text successfully copied to clipboard:', text);
        })
        .catch((err) => {
          console.error('Unable to copy text to clipboard:', err);
        });
  
    }
  }

  const submitPrompt = async (userPrompt, modifiedPrompt, systemPrompt, cb) => {
    cb()
    loading.value = true

    const completion = await openAi.chat.completions.create({
      model: model.value,
      // max_tokens: 150,
      temperature: 0.7,
      n: 1,
      stop: null,
      messages: [
        { role: 'system', content: systemPrompt },
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: modifiedPrompt
            }
          ]
        }
      ],
      stream: true
    })

    loading.value = false

    response.value.unshift({
      prompt: userPrompt,
      content: ''
    })

    for await (const chunk of completion) {
      const currentElement = response.value[0]
      currentElement.content += chunk.choices[0].delta.content ? chunk.choices[0].delta.content : ''
    }
    
    // code highlighter start
    let pre = document.querySelectorAll('pre')
    hljs.highlightAll()
    if (pre) {
      pre.forEach((item, index) => {
        let id = Math.floor(Math.random() * 999999)
        let div = document.createElement('div')
        item.classList.add(`id${id}`)
        let button = document.createElement('button')
        button.classList.add('codeCopyButton')
        button.innerText = "Copy"
        // let html = `<button index="${id}" class="codeCopyButton">Copy</button>`
        div.innerHTML = button
        button.addEventListener('click', _copyToClipboard(`id${id}`))
        item.prepend(div)
      })
      
      // _copyToClipboard
    }
  }

  return {
    loading,
    response,
    model,
    submitPrompt,
    generateImage
  }
}

