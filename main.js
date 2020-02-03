// get all the timeline list items and store in items
const items = document.querySelectorAll('#timeline li');

const isInViewport = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
    (window.innerHeight ||
      document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth ||
      document.documentElement.clientWidth)
  );
};


// for each item in items add the class show (to the li) if the item is in the viewport
const run = () =>
  items.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add('show');
    }
  });

// Events -  load, resize and scroll
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);

