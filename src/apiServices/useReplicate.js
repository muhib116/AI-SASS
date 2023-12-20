import Replicate from "replicate"

export const useReplicate = () => 
{
    const replicate = new Replicate({
        // get your token from https://replicate.com/account
        auth: import.meta.env.VITE_REPLICATE_API_TOKEN
    })

    const generateMusic = async (prompt) => {
        const output = await replicate.run(
            "riffusion/riffusion:8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05",
            {
              input: {
                prompt_a: prompt
              }
            }
        )
        console.log(output)
    }

    return {
        generateMusic
    }
}