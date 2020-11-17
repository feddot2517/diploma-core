import { Patch } from '../core/Patch';
import { getReactPath } from '../../utils/getRootPath';
const fs = require('fs');

export class Component extends Patch {
    props: {
        name: string,
        component: string,
    }

    constructor(props: {name: string, component: string} = {name: 'Default', component: 'Default'}) {
        super();
        this.props = props;
    }

    onUpdate(e: any) {
        fs.writeFileSync(getReactPath() + `/components/${this.props.name}.jsx`, `
            import React from 'react';
            
            export const ${this.props.name} = () => {
                return (
                    <div>Component ${this.props.name}</div>
                )
            }
        `);


        this.set('component', this.props.name);
    }

}

