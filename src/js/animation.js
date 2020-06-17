(function () {
  const CLASS_ANIMATION = 'animation',
    CLASS_SHOW = 'animation-show',
    options = {
      threshold: [0.25, 0.5, 0.75, 1],
    };

  const elements = [].filter.call(
    document.querySelectorAll(`.${CLASS_ANIMATION}`),
    (element) => !element.classList.contains(CLASS_SHOW)
  );

  const showAnimation = (element) => {
    element.classList.add(CLASS_SHOW);
  };

  if ('IntersectionObserver' in window) {
    const intersectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(({ intersectionRatio, target }) => {
          if (intersectionRatio > 0) {
            showAnimation(target);
          }
        });
      },
      options
    );

    elements.forEach((element) => intersectionObserver.observe(element));
  } else {
    elements.forEach((item) => showAnimation(item));
  }
})();
