// useLottie.ts
import lottie from 'lottie-web';
import type{ AnimationItem } from 'lottie-web';
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
      animation = null;  // Resetear animación
    }

    // Limpiar el contenedor
    animationContainer.value.innerHTML = '';

    try {
      // Solo inicializar si el contenedor existe
      animation = lottie.loadAnimation({
        container: animationContainer.value,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData,
      });

      animation.addEventListener('DOMLoaded', () => {
        animation?.play();
      });
    } catch (error) {
      console.error('Lottie error:', error);
    }
  };

  onMounted(() => {
    initAnimation();
    setTimeout(initAnimation, 100);
  });

  onUnmounted(() => {
    if (animation) {
      animation.destroy();
      animation = null;
    }
  });

  return {
    animationContainer,
    reinitAnimation: initAnimation
  };
}
