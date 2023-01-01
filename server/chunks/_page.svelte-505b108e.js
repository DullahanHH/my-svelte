import { c as create_ssr_component, v as validate_component } from './index-5c0598d4.js';
import { P as ProjectCard } from './ProjectCard-5ffedf67.js';

const gliders = "/_app/immutable/assets/gliders-6344134f.png";
const gliders1 = "/_app/immutable/assets/gliders-1-3f916c22.png";
const gliders2 = "/_app/immutable/assets/gliders-2-42c65d21.png";
const gliders3 = "/_app/immutable/assets/gliders-3-7fdc1cfe.png";
const gliders4 = "/_app/immutable/assets/gliders-4-96f280af.png";
const c6 = "/_app/immutable/assets/c6-8dbe6b7d.png";
const c61 = "/_app/immutable/assets/c6-1-c1e018c3.png";
const web = "/_app/immutable/assets/web-ea2c7292.png";
const web1 = "/_app/immutable/assets/web-1-0f0676c7.png";
const web2 = "/_app/immutable/assets/web-2-1ad6f723.png";
const web3 = "/_app/immutable/assets/web-3-8a0ffb47.png";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div><h1>CEOTR Projects</h1>

    ${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      title: "Glider Website (https://dev.ceotr.ca/gliders)",
      imgSet: [gliders, gliders1, gliders2, gliders3, gliders4],
      description: "The Glider Website is built by Svelte-kit and focus on visualizing and summarizing the data collected from gliders and displaying them on the map and the table. The main page comprises three parts: map, filter, and table. The map is a Leaflet component. It can show each mission's track and be distinguished by different colors. When the user hovers over the track,  the track will be highlighted and show summarized information. The table is sortable and shows detailed information. On the right side of the table, the eye button can control the show/hide for each track shown on the map, and the eye button on the table's header can simply show/hide all the tracks. The table is sorted by mission number by default, and the mission number is clickable. By clicking the mission number, the user will be directed to the individual mission page, which shows more detail. The filter bar can filter out the missions that the user wants. Select a tag (e.g. ID) and enter detail (e.g. ID that contains 44), and the filter option will display as a bubble. The map and table will reflect the changes by the filter's option."
    },
    {},
    {}
  )}

    ${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      title: "C6 to CSV Converter (http://c6.ceotr.ca/)",
      imgSet: [c6, c61],
      description: "The C6 to CSV converter website is built by Flask, and the function is implemented by Python. The website can convert the C6 file (a file type output by lab instrument) to a CSV file. Include the technic like auto zip/unzip, table reformation, batch download, data sorting, file upload, etc."
    },
    {},
    {}
  )}

    ${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      title: "MAPEL Website (http://dev.mapel.ceotr.ca/)",
      imgSet: [web, web1, web2, web3],
      description: "The MAPEL website is built by WordPress. It is a blog website for the MAPEL group to post news and research articles and introduce their laboratory."
    },
    {},
    {}
  )}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-505b108e.js.map
