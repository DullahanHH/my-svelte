import { c as create_ssr_component, v as validate_component } from './index-5c0598d4.js';
import { P as ProjectCard } from './ProjectCard-5ffedf67.js';

const space = "/my-svelte/_app/immutable/assets/space-c407e2aa.png";
const space1 = "/my-svelte/_app/immutable/assets/space-1-1ac0aa1d.png";
const space2 = "/my-svelte/_app/immutable/assets/space-2-d1c5ad9f.png";
const space3 = "/my-svelte/_app/immutable/assets/space-3-0e2de0ce.png";
const space4 = "/my-svelte/_app/immutable/assets/space-4-b59611c3.png";
const portfolio = "/my-svelte/_app/immutable/assets/this-18aa77ac.png";
const portfolio1 = "/my-svelte/_app/immutable/assets/this-1-b743eed9.png";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div><h1>Personal Projects</h1>

    ${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      title: "Space Fighter",
      imgSet: [space, space1, space2, space3, space4],
      description: "A 2D pixel space fighter built by Unity. The player needs to avoid damage by enemies and protect the deck. Whenever the player or deck takes damage, the entire health will drop, and when the health goes down to 0, the game is over. The player can purchase and gear up powerful items in the store. The coin can be dropped by the enemy. The stronger the enemy is, the more coin will be dropped. The boss will show up when the timer on the left goes down to zero. It will be more challenging, but it is a chance to gain more coins."
    },
    {},
    {}
  )}

    ${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      title: "My Portfolio Website",
      imgSet: [portfolio, portfolio1],
      description: "This website is built by Svelte-kit. As a portfolio, it records all my projects, which include my Co-op term projects, Game Jam projects, personal projects, etc. It is also a recap of the Svelte knowledge I learned during the Co-op term. The main component of this website is the project card. I modularized each project as a project card. Each project card has three parts: title, image viewer, and description. The modularization lets me post new projects quicker, and easy to maintain the website. In further development, I will try to add a bilingual function and be able to switch between English and Chinese."
    },
    {},
    {}
  )}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-2521651b.js.map
