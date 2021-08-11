/**
 * +++ script defer で呼び出しているため、DOMContentLoaded は不要.. +++
 */

const assignEvent = (c) => {
  if (!c.classList || !c.classList.contains('accordion__btn')) return;
  // accordion__btn の場合 click イベント付与
  c.addEventListener('click', () => {
    const node = c?.parentNode?.nextElementSibling;
    if (!node || !node.classList.contains('accordion__body')) return;
    // active 付与
    c.classList.toggle('accordion__btn--active');
    node.classList.toggle('accordion__body--active')
  });
};

const accordionClickEvent = (t) => {
  if (!(t instanceof Element)) return;
  const children = [].slice.call(t.children);
  if (!Array.isArray(children)) return;
  children.forEach(assignEvent);
};

const titles = document.querySelectorAll('.accordion__title');
titles.forEach(accordionClickEvent);
