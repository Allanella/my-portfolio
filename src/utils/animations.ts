// Animation utilities
export const fadeIn = (element: HTMLElement, duration: number = 300): void => {
  element.style.opacity = '0';
  element.style.transition = `opacity ${duration}ms ease-in-out`;
  
  requestAnimationFrame(() => {
    element.style.opacity = '1';
  });
};

export const slideIn = (
  element: HTMLElement,
  direction: 'left' | 'right' | 'up' | 'down' = 'left',
  duration: number = 300
): void => {
  const transforms = {
    left: 'translateX(-100%)',
    right: 'translateX(100%)',
    up: 'translateY(-100%)',
    down: 'translateY(100%)'
  };

  element.style.transform = transforms[direction];
  element.style.transition = `transform ${duration}ms ease-in-out`;
  
  requestAnimationFrame(() => {
    element.style.transform = 'translate(0)';
  });
};

export const staggeredAnimation = (
  elements: HTMLElement[],
  animation: (element: HTMLElement, index: number) => void,
  delay: number = 100
): void => {
  elements.forEach((element, index) => {
    setTimeout(() => {
      animation(element, index);
    }, index * delay);
  });
};
