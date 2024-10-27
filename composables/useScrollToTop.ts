// useScrollToTop.ts
import { useRouter } from 'vue-router'

export function useScrollToTop() {
  const router = useRouter()

  const scrollToTop = () => {
    // Verificar si smooth scroll es soportado
    if ('scrollBehavior' in document.documentElement.style) {
      try {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })
      } catch (error) {
        // Fallback para navegadores que no soportan scroll suave
        window.scrollTo(0, 0)
      }
    } else {
      // Implementación manual de scroll suave
      const scrollStep = -window.scrollY / 15
      const scrollInterval = setInterval(() => {
        if (window.scrollY !== 0) {
          window.scrollBy(0, scrollStep)
        } else {
          clearInterval(scrollInterval)
        }
      }, 15)
    }
  }

  // Usar onMounted para asegurarse que el DOM está listo
  onMounted(() => {
    router.afterEach(() => {
      // Pequeño timeout para asegurar que el DOM se ha actualizado
      setTimeout(scrollToTop, 0)
    })
  })

  // Exponer el método para uso manual
  return {
    scrollToTop
  }
}