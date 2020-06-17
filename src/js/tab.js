function tabs() {
  const DATA_ATTR_CONTAINER = 'label',
    DATA_ATTR_CONTAINER_ID = 'container',
    CLASS_ACTIVE = 'active';

  let el, navigations, containers;

  const removeClassActive = () => {
    [...navigations].forEach((element) => {
      element.classList.remove(CLASS_ACTIVE);
    });

    [...containers].forEach((element) => {
      element.classList.remove(CLASS_ACTIVE);
    });
  };

  const addEventClick = () => {
    [...navigations].forEach((element, index) => {
      element.addEventListener('click', () => {
        removeClassActive();
        navigations[index].classList.add(CLASS_ACTIVE);
        containers[index].classList.add(CLASS_ACTIVE);
      });
    });
  };

  const init = (element) => {
    el = element;
    navigations = element.querySelectorAll(`[data-${DATA_ATTR_CONTAINER}]`);
    containers = element.querySelectorAll(`[data-${DATA_ATTR_CONTAINER_ID}]`);

    navigations[0].classList.add(CLASS_ACTIVE);
    containers[0].classList.add(CLASS_ACTIVE);

    addEventClick();
  };

  return {
    init: init,
  };
}

(function() {
  const tab = tabs();
  tab.init(document.querySelector('#tab'));
})();
