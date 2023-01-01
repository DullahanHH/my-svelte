import { c as create_ssr_component, v as validate_component } from './index-5c0598d4.js';

const css = {
  code: "ul.svelte-1h9wj5w{margin:2rem auto 3rem;width:800px;list-style-type:none;display:flex;justify-content:space-between}a.svelte-1h9wj5w{color:gray;text-decoration:none;font-weight:bold;transition:0.3s}a.svelte-1h9wj5w:hover{color:aqua}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav><ul class="${"svelte-1h9wj5w"}"><li><a href="${"/"}" class="${"svelte-1h9wj5w"}">About Me</a></li>
        <li><a href="${"/personal"}" class="${"svelte-1h9wj5w"}">Personal Projects</a></li>
        <li><a href="${"/ceotr"}" class="${"svelte-1h9wj5w"}">CEOTR Projects</a></li>
        <li><a href="${"/gamejam"}" class="${"svelte-1h9wj5w"}">Game Jam Projects</a></li>
        <li><a href="${"/other"}" class="${"svelte-1h9wj5w"}">Other Projects</a></li></ul>

</nav>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}

${slots.default ? slots.default({}) : ``}

`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-df3a870d.js.map
