import { Patch } from '../core/Patch';

export class Plus extends Patch {
    props: {
        number1?: number,
        number2?: number,
        sum: number,
    };

    constructor(props: {number1?: number, number2?: number} = {number1: 0, number2: 0}) {
        super();
        // @ts-ignore
        this.props = props;
        if(!props.number1) {
            this.props.number1 = 0;
        }
        if(!props.number2) {
            this.props.number2 = 0;
        }
    }

    onUpdate(e: {key: string, value: any}) {
        // @ts-ignore
        const sum = +this.props.number1 + +this.props.number2;
        this.set('sum', sum);
    }

}

