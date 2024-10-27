import lottie from 'lottie-web';

export function useLottie(animationData: any) {
  const animationContainer = ref<HTMLElement | null>(null);

  const isMobile = ref(false);

  onMounted(() => {
    isMobile.value = window.innerWidth < 768; // Usamos el ancho de pantalla

    if (animationContainer.value) {
      lottie.loadAnimation({
        container: animationContainer.value,
        renderer: isMobile.value ? 'canvas' : 'svg', // Canvas en móviles
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
