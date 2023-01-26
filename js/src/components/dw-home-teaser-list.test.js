import { DwHomeTeaserList } from "./dw-home-teaser-list.js";
import {expect, fixture, html} from "@open-wc/testing";
import {teaserRepository} from "../service/TeaserRepository.js";
import sinon from "sinon";

customElements.define('dw-home-teaser-list', DwHomeTeaserList);



describe("dw-home-teaser-list", () => {
   it("when the ajax call is loading then a loading information should be displayed", async () => {
        const element = await fixture(html`<dw-home-teaser-list></dw-home-teaser-list>`);

        expect(element.shadowRoot.querySelector('h1').innerText).to.equal('loading ...');
   });

    it("when the ajax call is done then the teasers should be rendered", async () => {
        const teaserRepositoryMock = sinon.mock(teaserRepository);
        teaserRepositoryMock.expects('fetchAll').withArgs((data) => {
            console.log(data);
        }).once();

        teaserRepositoryMock.verify();

        const element = await fixture(html`<dw-home-teaser-list></dw-home-teaser-list>`);

        expect(element.shadowRoot.querySelector('h1').innerText).to.equal('loading ...');

        teaserRepositoryMock.restore();
    });

});