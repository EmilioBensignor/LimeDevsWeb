// useLottie.ts
import lottie from 'lottie-web';
import type { AnimationItem } from 'lottie-web';
import { onMounted, onUnmounted, ref, nextTick } from 'vue';

export function useLottie(animationData: any) {
  const animationContainer = ref<HTMLElement | null>(null);
  let animation: AnimationItem | null = null;

  const initAnimation = async () => {
    await nextTick();
    if (!animationContainer.value) return;

    // Destruir animación previa si existe
    if (animation) {
      animation.destroy();
    }

    // Limpiar el contenedor
    animationContainer.value.innerHTML = '';

    try {
      animation = lottie.loadAnimation({
        container: animationContainer.value,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData,
      });

      // Forzar play después de cargar
      animation.addEventListener('DOMLoaded', () => {
        animation?.play();
      });
    } catch (error) {
      console.error('Lottie error:', error);
    }
  };

  onMounted(() => {
    // Intentar inicializar múltiples veces
    initAnimation();
    // Segundo intento después de un breve delay
    setTimeout(initAnimation, 100);
  });

  onUnmounted(() => {
    if (animation) {
      animation.destroy();
    }
  });

  return {
    animationContainer,
    // Exponer método para reiniciar si es necesario
    reinitAnimation: initAnimation
  };
}