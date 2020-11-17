import { Patch } from '../core/Patch';
import { World } from '../core/World';
import { randomString } from '../../utils/randomString';
import { getRootPath } from '../../utils/getRootPath';
const fs = require('fs');

export class RenderHtmlHeader extends Patch {
    props: {
        html: any,
    };

    constructor(props: {html: any,} = {html: '<h1>Default header</h1>'}) {
        super();
        this.props = props;
    }

    onUpdate(e: any) {
        console.log(this.props.html);

        const str = randomString(20);
        fs.writeFileSync(getRootPath() + '/public' + `/${str}.html`, this.props.html);
        World.sendLog(`http://localhost:3030/${str}.html`);
    }

}

