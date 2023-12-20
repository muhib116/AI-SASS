import { getCurrentInstance, computed, useAttrs } from "vue"

export const useForm = () => {
    const attrs = useAttrs()
    
    const uid = computed(() => {
        const instance = getCurrentInstance()
        return attrs.id ? attrs.id : "uid-" + instance.uid
    })
    return {
        uid
    }
}