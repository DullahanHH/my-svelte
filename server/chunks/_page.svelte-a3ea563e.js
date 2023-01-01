import { c as create_ssr_component, v as validate_component } from './index-5c0598d4.js';
import { P as ProjectCard } from './ProjectCard-5ffedf67.js';

const fl = "/_app/immutable/assets/fl-c9243763.png";
const pixel = "/_app/immutable/assets/pixel-6c4afd10.png";
const pixel1 = "/_app/immutable/assets/pixel-1-069b305e.png";
const pixel2 = "/_app/immutable/assets/pixel-2-7b93749a.png";
const pixel3 = "/_app/immutable/assets/pixel-3-ebd2630f.png";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div><h1>Other Projects</h1>

    ${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      title: "'A New Start' (FL Studio)",
      imgSet: [fl],
      description: "A Melodic Dubstep created using FL Studio. Technics used: Envelope, Reverb, Kick Start, Sample Editing, Automation, etc."
    },
    {},
    {}
  )}

    ${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      title: "Pixel Art (Aseprite)",
      imgSet: [pixel, pixel1, pixel2, pixel3],
      description: "Pixel art for practice and game development. Include animation and other technics."
    },
    {},
    {}
  )}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-a3ea563e.js.map
