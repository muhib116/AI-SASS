import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('@/pages/dashboard/Index.vue')
    },
    {
      path: '/conversation',
      name: 'conversation',
      component: () => import('@/pages/conversation/Index.vue')
    },
    {
      path: '/post-title-generator',
      name: 'post-title-generator',
      component: () => import('@/pages/post-title-generator/Index.vue')
    },
    {
      path: '/youtube-title-generator',
      name: 'youtube-title-generator',
      component: () => import('@/pages/youtube-title-generator/Index.vue')
    },
    {
      path: '/content-idea-generator',
      name: 'content-idea-generator',
      component: () => import('@/pages/content-idea-generator/Index.vue')
    },
    {
      path: '/youtube-video-idea-generator',
      name: 'youtube-video-idea-generator',
      component: () => import('@/pages/youtube-video-idea-generator/Index.vue')
    },
    {
      path: '/image-generator',
      name: 'image-generator',
      component: () => import('@/pages/image-generator/Index.vue')
    },
    {
      path: '/video-generator',
      name: 'video-generator',
      component: () => import('@/pages/video-generator/Index.vue')
    },
    {
      path: '/music-generator',
      name: 'music-generator',
      component: () => import('@/pages/music-generator/Index.vue')
    },
    {
      path: '/code-generator',
      name: 'code-generator',
      component: () => import('@/pages/code-generator/Index.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('@/pages/settings/Index.vue')
    },
  ]
})

export default router
