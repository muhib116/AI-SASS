import { ref } from 'vue'

const menus = ref([
    {
        title: 'Dashboard',
        icon: 'presentation',
        to: {
            name: 'dashboard'
        },
        color: '#FFAB91'
    },
    {
        title: 'Conversation',
        icon: 'chat',
        to: {
            name: 'conversation'
        },
        color: '#F06292'
    },
    {
        title: 'Image Generator',
        icon: 'image-square',
        to: {
            name: 'image-generator'
        },
        color: '#26A69A'
    },
    {
        title: 'Video Generator',
        icon: 'video-camera',
        to: {
            name: 'video-generator'
        },
        color: '#4FC3F7'
    },
    {
        title: 'Music Generator',
        icon: 'microphone-stage',
        to: {
            name: 'music-generator'
        },
        color: '#AED581'
    },
    {
        title: 'Code Generator',
        icon: 'code',
        to: {
            name: 'code-generator'
        },
        color: '#64B5F6'
    },
    {
        title: 'Settings',
        icon: 'sliders',
        to: {
            name: 'settings'
        },
        color: '#4DB6AC'
    },
])

export const useLeftSidebar = () => {

    return {
        menus
    }
}