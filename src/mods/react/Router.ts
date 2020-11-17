import { Patch } from '../core/Patch';
import { World } from '../core/World';
import { randomString } from '../../utils/randomString';
import { getReactPath } from '../../utils/getRootPath';
import has = Reflect.has;
const fs = require('fs');

export class Router extends Patch {
    props: {
        routes: Array<IRoute>;
        router: any,
    };

    constructor(props: { routes: Array<IRoute>, router: any } = { routes: [], router: null }) {
        super();
        this.props = props;
    }

    set(key: string, value: any) {
        if(key === 'routes') {
            const lastRoutes = this.props.routes;
            const routeIndex = lastRoutes.findIndex(r => r.component === value.component);
            if(routeIndex !== -1) {
                lastRoutes.splice(routeIndex, 1, value);
            }else {
                lastRoutes.push(value);
            }
            super.set(key, lastRoutes);
        }
        else {
            super.set(key, value);
        }
    }

    onUpdate() {
        this.set('router', () => {
            fs.writeFileSync(getReactPath() + '/Router.jsx', `
                import React from 'react';
                import { BrowserRouter } from 'react-router-dom';
                import { Route } from 'react-router-dom';
                
                ${this.props.routes.map(r => {
        return `import { ${r.component} } from './components/${r.component}'`
                }).join('\n')}
                
                export const Router = () => {
                    return (
                        <BrowserRouter>
                        ${this.props.routes.map(r => r.jsx()).join('\n')}
                        </BrowserRouter>
                    )
                }
                
            `)
        })
    }
}

export interface IRoute {
    path: string,
    component: string,
    jsx: Function
}