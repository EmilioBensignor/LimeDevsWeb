import lottie from 'lottie-web';
import type { AnimationItem } from 'lottie-web';
import { onMounted, onUnmounted, ref, nextTick } from 'vue';

export function useLottie(animationData: any) {
  const animationContainer = ref<HTMLElement | null>(null);
  let animation: AnimationItem | null = null;

  onMounted(async () => {
    // Esperar a que el DOM esté realmente listo
    await nextTick();

    if (animationContainer.value) {
      try {
        animation = lottie.loadAnimation({
          container: animationContainer.value,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData,
          rendererSettings: {
            progressiveLoad: true,
            preserveAspectRatio: 'xMidYMid slice'
          }
        });
      } catch (error) {
        console.error('Error loading Lottie:', error);
      }
    }
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