import lottie from 'lottie-web';

export function useLottie(animationData: any) {
  const animationContainer = ref<HTMLElement | null>(null);

  onMounted(() => {
    if (animationContainer.value) {
      lottie.loadAnimation({
        container: animationContainer.value,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData,
      });
    }
  });

  return {
    animationContainer,
  };
}
