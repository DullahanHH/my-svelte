import { c as create_ssr_component, v as validate_component } from './index-5c0598d4.js';
import { P as ProjectCard } from './ProjectCard-5ffedf67.js';

const sheep = "/_app/immutable/assets/sheep-6a5e80d7.png";
const sheep1 = "/_app/immutable/assets/sheep-1-ce7ada2e.png";
const sheep2 = "/_app/immutable/assets/sheep-2-ecb90373.png";
const sheep3 = "/_app/immutable/assets/sheep-3-4fb9b9a3.png";
const loop = "/_app/immutable/assets/loop-bddf1f3c.png";
const loop1 = "/_app/immutable/assets/loop-1-bda61a40.png";
const loop2 = "/_app/immutable/assets/loop-2-bfb15240.png";
const loop3 = "/_app/immutable/assets/loop-3-c47c9b0b.png";
const loop4 = "/_app/immutable/assets/loop-4-6c5f0362.png";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div><h1>Game Jam Projects</h1>

    ${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      title: "Atlantic Game Jam (https://itch.io/jam/atlantic-game-jam/rate/1421492)",
      imgSet: [sheep, sheep1, sheep2, sheep3],
      description: "'Bite Sized Justice', a 2D platform game built by Unity. The Atlantic Game Jam is 48 hours event held by Ubisoft, and the topic is 'with great power comes great responsibility.' We form a group of 6 (4 programmers and 2 artists). In the programmer's role, I worked on the following parts: game structure design, merge conflict fixing, player controller, camera follows, tilemap editing, audio design, player and enemy’s animator, UI design, etc. The background of the game, in brief, is the sheep (player) who wants to rescue his friends in the wolf's territory. Whenever the player saves a sheep, the total health will get one. Health is closely related to the final score. To get the highest score, the player must rescue all the sheep and avoid all damage from wolves or traps. As a result of this Game Jam, we get an overall ranking of 9."
    },
    {},
    {}
  )}

    ${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      title: "Newbies Jam (https://cloudrendering.unity.cn/share/cdce2cff92ebd9ae)",
      imgSet: [loop, loop1, loop2, loop3, loop4],
      description: "'One Way Out', a 2D game built by Unity. The Newbies Jam is one week event held by Unity China, and the topic is 'Loop.' We form a group of 3 (3 programmers). In the programmer's role, I worked on the following parts: UI programming, audio controller, particle design, art design, audio design,  UI design, etc. Compared with other games, the player no longer controls the main character but controls a circular spaceship to rotate left and right. Players can bounce on the platform, and they're three different platforms: the gray platform does nothing but slightly decrease the elastic energy, the green platform will dramatically increase the elastic energy, and the red platform will decrease the elastic energy. When the player collects all three gears left on the map, the escape gate at the start point will open."
    },
    {},
    {}
  )}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-48a75164.js.map
