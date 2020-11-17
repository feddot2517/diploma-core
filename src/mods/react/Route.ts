import { Patch } from '../core/Patch';
import { IRoute } from './Router';

export class Route extends Patch {
    props: {
        path: string,
        component: string,
        route: any,

    }

    constructor(props: {path: string, component: string, route: any} = {path: '/', component: 'Default', route: null}) {
        super();
        this.props = props;
    }

    onUpdate(e: any) {
        this.set('route', {
            jsx: () => `<Route exact path='${this.props.path}' component={${this.props.component}}/>`,
            path: this.props.path,
            component: this.props.component,
        })
    }

}

