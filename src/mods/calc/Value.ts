
import { Patch } from '../core/Patch';

export class Value extends Patch {
    props: {
        value: number,
    };

    constructor(props: {value: number}) {
        super();
        this.props = props;
    }

}

