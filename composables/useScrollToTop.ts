// useScrollToTop.ts
import { useRouter } from 'vue-router'

export function useScrollToTop() {
  const router = useRouter()

  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  }

  const scrollToTop = () => {
    if (isMobile()) {
      // Solución específica para móviles
      document.body.scrollTop = 0 // Para Safari móvil
      document.documentElement.scrollTop = 0 // Para otros navegadores móviles
    } else {
      // Mantener el comportamiento suave para desktop
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
  }

  onMounted(() => {
    router.afterEach((to, from) => {
      if (to.path !== from.path) {
        nextTick(() => {
          scrollToTop()
        })
      }
    })
  })

  return {
    scrollToTop
  }
}