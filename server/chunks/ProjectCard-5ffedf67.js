import { c as create_ssr_component, e as escape, d as add_attribute } from './index-5c0598d4.js';

const css = {
  code: ".container.svelte-sk5du9{background:lightgray;border-radius:25px;padding:1rem;margin:2rem 0}.image-container.svelte-sk5du9{display:flex;align-items:center;justify-content:center;height:30rem}.image.svelte-sk5du9{display:block;vertical-align:middle;margin:auto;width:80%;max-width:60rem;max-height:30rem}.btn.svelte-sk5du9{margin:1rem;padding:1rem}button.svelte-sk5du9{padding:0.6rem 1rem;border-radius:25px;border:none;transition:0.2s}button.svelte-sk5du9:hover{background:gray}.arrow.svelte-sk5du9{border:solid black;border-width:0 3px 3px 0;display:inline-block;padding:3px}.left.svelte-sk5du9{transform:rotate(135deg);-webkit-transform:rotate(135deg)}.right.svelte-sk5du9{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}",
  map: null
};
const ProjectCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { imgSet } = $$props;
  let { description } = $$props;
  let imgNum = 0;
  let selectedImg = imgSet[imgNum];
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.imgSet === void 0 && $$bindings.imgSet && imgSet !== void 0)
    $$bindings.imgSet(imgSet);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  $$result.css.add(css);
  return `<div class="${"container svelte-sk5du9"}"><h2>${escape(title)}</h2>


    <div class="${"image-container svelte-sk5du9"}"><div class="${"btn svelte-sk5du9"}"><button class="${"svelte-sk5du9"}"><i class="${"arrow left svelte-sk5du9"}"></i></button></div>
        <img class="${"image svelte-sk5du9"}"${add_attribute("src", selectedImg, 0)} alt="${"image preview"}">
        <div class="${"btn svelte-sk5du9"}"><button class="${"svelte-sk5du9"}"><i class="${"arrow right svelte-sk5du9"}"></i></button></div></div>


    <p>${escape(description)}</p>
</div>`;
});

export { ProjectCard as P };
//# sourceMappingURL=ProjectCard-5ffedf67.js.map
