import { DwHomeTeaser } from "./dw-home-teaser.js";
import {expect, fixture, html} from "@open-wc/testing";

customElements.define("dw-home-teaser", DwHomeTeaser);

describe("dw-home-teaser", () => {
    it("a teaser should have a h3 title", async () => {
        const element = await fixture(html`<dw-home-teaser title="Hello World"></dw-home-teaser>`);

        expect(element.shadowRoot.querySelector('h3').innerText).to.equal("Hello World");
    });

    it("a teaser should have a image", async () => {
        const element = await fixture(html`<dw-home-teaser img="test.jpg"></dw-home-teaser>`);

        expect(element.shadowRoot.querySelector('img').src).to.contains("img/test.jpg");
    })
});