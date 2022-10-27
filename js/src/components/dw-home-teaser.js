const template = document.createElement('template');
template.innerHTML =
    '    <link rel="stylesheet" type="text/css" href="css/ntrn-strs-typo.css">\n' +
    '    <link rel="stylesheet" type="text/css" href="css/bootstrap.css">\n' +
    '\n' +
    '    <link rel="stylesheet" type="text/css" href="css/ntrn-strs-custom-col.css">\n' +
    '    <link rel="stylesheet" type="text/css" href="css/ntrn-strs-standard.css">\n' +
    '    <link rel="stylesheet" type="text/css" href="css/ntrn-strs-footer.css">\n' +
    '    <link rel="stylesheet" type="text/css" href="css/ntrn-strs-header.css">\n' +
    '    <link rel="stylesheet" type="text/css" href="css/ntrn-strs-class-all.css">\n' +
    '    <link rel="stylesheet" type="text/css" href="css/ntrn-strs-menu-icon.css">\n' +
    '\n' +
    '    <link rel="stylesheet" type="text/css" href="css/ntrn-strs-LP.css">';

class DwHomeTeaser extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        const position = this.getAttribute('position');
        const img = this.getAttribute('img');
        const title = this.getAttribute ('title');
        const infoText = this.getAttribute('infoText');
        const link = this.getAttribute('link');

        shadow.innerHTML = `<div class="container teaser-container-${position}">\n` +
            `                <div class="teaser-img">\n` +
            `                    <img src="img/${img}" alt="TeaserNeutronStar">\n` +
            `                </div>\n` +
            `                <div>\n` +
            `                    <h3>${title}</h3>\n` +
            `                    <p>${infoText}</p>\n` +
            `                    <a class="arrow" href="${link}">\n` +
            `                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n` +
            `                            <path d="M24.7113 44.002C24.0242 44.002 23.3468 43.7086 22.8712 43.141C22.016 42.1213 22.1505 40.6061 23.169 39.7547L35.1946 29.6536C36.2131 28.7974 37.7265 28.932 38.5769 29.9518C39.4321 30.9715 39.2975 32.4867 38.279 33.3381L26.2535 43.4392C25.8019 43.8192 25.2542 44.002 24.7113 44.002Z" fill="#52EDAC"/>\n` +
            `                            <path d="M45.5907 26.4043H2.50448C1.25052 26.4043 0.131089 25.4855 0.0109777 24.2349C-0.123547 22.8015 0.995889 21.5942 2.40359 21.5942H39.0519L23.1636 8.24624C22.1451 7.39486 22.0153 5.87487 22.8657 4.85995C23.7161 3.84021 25.2343 3.71034 26.248 4.56172L47.133 22.1089C47.9113 22.763 48.1995 23.8309 47.8584 24.7881C47.5173 25.7501 46.6093 26.3946 45.5907 26.4043Z" fill="#52EDAC"/>\n` +
            `                        </svg>\n` +
            `                    </a>\n` +
            `                </div>\n` +
            `            </div>`;

        shadow.appendChild(template);
    }

    connectedCallback() {

    }


}

export { DwHomeTeaser };