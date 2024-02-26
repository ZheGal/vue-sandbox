import type { Directive, VNode } from 'vue';

export const formInput: Directive<HTMLElement, string> = {
  created(el, binding, node) {
    const inputName = binding.value;
    console.log(node.el);
  },
};
