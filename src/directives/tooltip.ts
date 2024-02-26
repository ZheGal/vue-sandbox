import type { Directive } from 'vue';
export const tooltip: Directive<HTMLElement, string> = {
  created(el, binding) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.innerHTML = binding.value;

    const rect = el.getBoundingClientRect();
    tooltip.style.top = rect.top + 'px';
    tooltip.style.left = rect.left + 'px';

    document.body.append(tooltip);

    el.addEventListener('mousemove', function () {
      tooltip.style.display = 'block';
    });

    el.addEventListener('mouseout', function () {
      tooltip.style.display = 'none';
    });
  },
};
