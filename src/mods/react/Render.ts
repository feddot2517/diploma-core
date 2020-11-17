import { Patch } from '../core/Patch';
import { World } from '../core/World';
import { randomString } from '../../utils/randomString';
const fs = require('fs');
const path = require('path');

export class Render extends Patch {
    props: {
        router: any,
    };

    constructor(props: {router: any} = {router: ()=>World.sendLog('Oops... Default render log')}) {
        super();
        this.props = props;
    }

    onUpdate(e: any) {
        this.props.router();
    }

}

