import { STYLE_LIST } from "../utils/StyleList.js";
import {teaserRepository} from "../service/TeaserRepository.js";

class DwHomeTeaserList extends HTMLElement {
    teaserList = [];
    isLoading = true;

    constructor() {
        super();
    }

    connectedCallback() {
        this.attachShadow({ mode: 'open' });

        teaserRepository.fetchAll((teaserList) => {
            console.log(teaserList);

            this.teaserList = teaserList;
            this.isLoading = false;

            this.render();
        });

        this.render();
    }

    render() {
        let template = '';
        if (this.isLoading) {
            template = '<h1>loading ...</h1>'
        } else {
            STYLE_LIST.forEach((file) => {
                template += `<link rel="stylesheet" type="text/css" href="${file}">`;
            });

            let teaserAllInner = '';
            this.teaserList.forEach(({img, title, infoText, link}, index) => {
                const position = (index % 2 === 0) ? 'left' : 'right';
                teaserAllInner += `<dw-home-teaser 
                    position="${position}"
                    img="${img}"
                    title="${title}"
                    infoText="${infoText}"
                    link="${link}"
                    class="container teaser-container-${position}"
             ></dw-home-teaser>`;
            });

            template += `
            <article class="teaser-all">
                <div class="row teaser-all-inner">
                    ${teaserAllInner}
                </div>
            </article>
        `;
        }

        this.shadowRoot.innerHTML = template;
    }
}

export { DwHomeTeaserList };