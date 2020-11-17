import { Patch } from '../core/Patch';
import { World } from '../core/World';

export class HtmlHeader extends Patch {
    props: {
        htmlHeader: any,
        text: string,
        img: string
    };

    constructor(props: {htmlHeader: any, text: string, img: string} = {htmlHeader: '<h1>Hello, world</h1>', text: 'Hello, world', img: 'https://habrastorage.org/files/056/467/6ca/0564676caf4c4cf88786de3c04a16321.jpg'}) {
        super();
        this.props = props;
    }

    onUpdate(e: any) {
        this.set('htmlHeader', `<h1>${this.props.text}</h1><img src="${this.props.img}" alt="qwe"/>`)
    }

}

