import { c as create_ssr_component, d as add_attribute } from './index-5c0598d4.js';

const profile = "/my-svelte/_app/immutable/assets/profile-fb411776.jpg";
const css = {
  code: ".text.svelte-1dphote{display:inline-block;width:70%;height:20rem}.profile.svelte-1dphote{display:inline-block;float:right;width:20%;height:20rem;text-align:center;overflow:hidden}.profile-img.svelte-1dphote{width:100%;height:auto}p.svelte-1dphote{font-size:120%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div><h1>About Me</h1>
    <div class="${"text svelte-1dphote"}"><p class="${"svelte-1dphote"}">My name is Jianchun Zhou and I am currently studying in Dalhousie as a third year student in the Department
            of Computer Science.
        </p>
        <p class="${"svelte-1dphote"}">From July 2021 to December 2022, I participated in the Co-op project and took the position of software
            development in the data department of CEOTR (Coastal Environmental Observation Technology and Research).
            During my tenure, I participated in the development of several website projects and gradually became
            familiar with the development mode in the workplace.
        </p>
        <p class="${"svelte-1dphote"}">In my spare time, I&#39;m also interested in video games. It&#39;s not just about playing games, it&#39;s more about
            developing games. In game development, I know a thing or two about programming, art, and sound effects. I
            have done many demos of 2D games and participated in many Game Jams. With the help of demos and Game Jam, I
            continue to accumulate experience in game development and the ability to work in a team.
        </p></div>
    <div class="${"profile svelte-1dphote"}"><img class="${"profile-img svelte-1dphote"}"${add_attribute("src", profile, 0)} alt="${"profile img"}"></div>

</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-29a86209.js.map
