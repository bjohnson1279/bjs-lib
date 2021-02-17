export class StyleElement extends HTMLStyleElement {
    constructor() {
        //
    }

    set styleMedia(media) {
        this.media = media;
    }

    set styleType(type) {
        this.type = type;
    }

    set styleDisabled(disabled) {
        this.disabled = Boolean(disabled);
    }

    set styleScoped(scoped) {
        this.scoped = Boolean(scoped); // avoid using until more browsers support it
    }
}
