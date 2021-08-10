/**
 * +++ script defer で呼び出しているため、DOMContentLoaded は不要.. +++
 * ※ 以下リファクタ予定..
 */

const clickAccordion = (t) => {
  if (!(t instanceof Element)) return;
  const children = [].slice.call(t.children);
  if (!Array.isArray(children)) return;
  children.forEach((c) => {
    // if (!(c instanceof DOMTokenList)) return;
    if (!c.classList.contains('accordion__btn')) return;
    // accordion__btn の場合 click イベント付与
    c.addEventListener('click', () => {
      const nextNode = c?.parentNode?.nextElementSibling;
      if (!nextNode || !nextNode.classList.contains('accordion__body')) return;
      // active 付与
      c.classList.toggle('accordion__btn--active');
      nextNode.classList.toggle('accordion__body--active')
    });
  });
};

const titles = document.querySelectorAll('.accordion__title');
titles.forEach(clickAccordion);
