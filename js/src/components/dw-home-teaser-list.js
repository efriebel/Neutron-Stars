const teaserList = [
    {
        position: 'left',
        img: 'LP_neutronstar_final.png',
        title: 'INFO',
        infoText: 'If next to these amazing celestial bodies supernovae explosions, black holes or magnetic and gravitational forces so enormous that they’re out of our comprehension interest you, then go ahead and glimpse into the world of neutron stars...',
        link: 'info.html'
    },
    {
        position: 'left',
        img: 'LP_neutronstar_final.png',
        title: 'INFO',
        infoText: 'If next to these amazing celestial bodies supernovae explosions, black holes or magnetic and gravitational forces so enormous that they’re out of our comprehension interest you, then go ahead and glimpse into the world of neutron stars...',
        link: 'info.html'
    }
];


class DwHomeTeaserList extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        const template = document.createElement('template');

        teaserList.forEach((teaser) => {
            const homeTeaser = Object.assign(document.createElement('dw-home-teaser'), {
                'img': teaser.img,
            });

            template.appendChild(homeTeaser);
        })

        shadow.appendChild(template);
    }
}

export { DwHomeTeaserList };