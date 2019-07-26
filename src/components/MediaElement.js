export default class MediaElement extends HTMLVideoElement {
  get element() {
    return this.hasAttribute("element");
  }

  set element(val) {
    this.setAttribute("element", "");
  }
}

customElements.define('media-element', MediaElement);
