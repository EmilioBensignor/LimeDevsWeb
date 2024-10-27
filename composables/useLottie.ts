// useLottie.ts
import lottie from 'lottie-web';
import type { AnimationItem } from 'lottie-web';
import { onMounted, onUnmounted, ref } from 'vue';

export function useLottie(animationData: any) {
  const animationContainer = ref<HTMLElement | null>(null);
  let animation: AnimationItem | null = null;

  onMounted(() => {
    // Pequeño timeout para asegurar que el contenedor está listo
    setTimeout(() => {
      if (animationContainer.value) {
        try {
          animation = lottie.loadAnimation({
            container: animationContainer.value,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData,
          });
        } catch (error) {
          console.error('Error loading Lottie animation:', error);
        }
      }
    }, 100);
  });

  onUnmounted(() => {
    if (animation) {
      animation.destroy();
    }
  });

  return {
    animationContainer,
  };
}