import { Patch } from '../core/Patch';
import { World } from '../core/World';
import { randomString } from '../../utils/randomString';

export class Arithmetic extends Patch{
    props: {
        1: number,
        2: number,
        operation: IArithmeticTypes,
        result: number,
    };

    set(key: string, value: any) {
        World.emit('change', {_id: this._id, key, value});
        // @ts-ignore
        this.props[key] = value;
    }


    private calc(): number {
        const { operation } = this.props;
        if (operation === 'plus') return this.props['1'] + this.props['2'];
        else if (operation === 'minus') return this.props['1'] - this.props['2'];
        else if (operation === 'divide') return this.props['1'] / this.props['2'];
        else return this.props['1'] * this.props['2'];
    }

    constructor(props: {operation: IArithmeticTypes, alias: string}) {
        super()
        this.props = {
            1: 0,
            2: 0,
            operation: 'plus',
            result: NaN
        };

    }

    onUpdate() {
        this.set('result', this.calc())
    }
}

type IArithmeticTypes = 'multiple' | 'minus' | 'plus' | 'divide';

