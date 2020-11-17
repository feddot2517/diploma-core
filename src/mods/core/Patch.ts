import { randomString } from "../../utils/randomString";
import { World } from './World';

export class Patch {
    _id: string;

    constructor() {
        this._id = randomString(20);
    }

    set(key: string, value: any) {
        World.emit('change', {_id: this._id, key, value});
        // @ts-ignore
        this.props[key] = value;
    }

}