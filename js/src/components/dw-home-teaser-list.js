import { STYLE_LIST } from "../utils/StyleList.js";

const teaserList = [
    {
        img: 'LP_neutronstar_final.png',
        title: 'INFO',
        infoText: 'If next to these amazing celestial bodies supernovae explosions, black holes or magnetic and gravitational forces so enormous that they’re out of our comprehension interest you, then go ahead and glimpse into the world of neutron stars...',
        link: 'info.html'
    },
    {
        img: 'LP_starmap_final.png',
        title: 'STAR MAP',
        infoText: 'Looking at the Star Map you’ll experience neutron stars and their systems in full glory. This 3D View shows extraordinary places in our milkyway in great detail. Take a look and enjoy your journey...',
        link: 'starmap.html'
    },
    {
        img: 'LP_observatory_final.png',
        title: 'EVENTS',
        infoText: 'Listed here are chances for you to learn even more about our universe. How about a visit to an observatory and watching celestial bodies in real time? Or a trip to a planetarium? Find that and even more here...',
        link: 'events.html'
    },
    {
        img: 'LP_map_final.png',
        title: 'LOCATIONS',
        infoText: 'Need a guide to check out some observatories closest to you? Then this Map is for you, specifically mapped to show all observatories throughout Germany!',
        link: 'locations.html'
    }
];


class DwHomeTeaserList extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.attachShadow({ mode: 'open' });

        STYLE_LIST.forEach((file) => {
            this.shadowRoot.innerHTML += `<link rel="stylesheet" type="text/css" href="${file}">`;
        });

        let teaserAllInner = '';
        teaserList.forEach(({img, title, infoText, link}, index) => {
            const position = (index % 2 === 0) ? 'left' : 'right';

            teaserAllInner += `<dw-home-teaser 
                    position="${position}"
                    img="${img}"
                    title="${title}"
                    infoText="${infoText}"
                    link="${link}"
             ></dw-home-teaser>`;
        })

        this.shadowRoot.innerHTML += `
            <article class="teaser-all">
                <div class="row teaser-all-inner">
                    ${teaserAllInner}
                </div>
            </article>
        `;
    }
}

export { DwHomeTeaserList };