import { randomString } from '../../utils/randomString';
import { Patch } from '../core/Patch';
import { World } from '../core/World';

export class Logger extends Patch{
    logBox: Array<any>;
    props: {
        value: any
    }

    constructor() {
        super();
        this.props = { value: 0 };
        this.logBox = Array<any>();
    }

    onUpdate(event: {_id: string, key: string, value: any, patch: any}) {
        //World.sendLog(event);
        World.sendLog(event.value);
    }

    getLogBox() {
        return this.logBox;
    }
}

