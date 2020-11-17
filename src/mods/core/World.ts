import { EventEmitter } from "events";
import { Patch } from "./Patch";
import _ =  require('lodash');

class WorldT extends EventEmitter {
    _connections: Array<any>;
    logs: Array<any>;

    constructor() {
        super();
        this._connections = [];
        this.logs = Array<any>();
    }

    sendLog(log: any) {
        this.clearLogs();
        this.logs.push(log);
    }

    getLogs() {
        return this.logs;
    }

    clearLogs() {
        this.logs = [];
    }

    hasConnection(id1: string, id2: string, sField: string, tField: string): boolean {
        const hasST = !!this._connections.find(i => _.isEqual(i, {s: id1, t: id2, sField, tField}));
        const hasTS = !!this._connections.find(i => _.isEqual(i, {s: id2, t: id1, sField, tField}));
        const hasSS = !!this._connections.find(i => _.isEqual(i, {s: id1, t: id1, sField, tField}));
        const hasTT = !!this._connections.find(i => _.isEqual(i, {s: id2, t: id2, sField, tField}));

        if(hasSS || hasST || hasTT || hasTS) {
            return true;
        }
        else {
            return false;
        }
    }

    connect(source: ISourceConnect, target: ITargetConnect) {
        if(this.hasConnection(source.patch._id, target.patch._id, source.field, target.field)) return;
        this.on('change', (e: IWorldEvent) => {
            if (e._id === source.patch._id) {
                if(e.key === source.field) {
                    target.patch.set(target.field, e.value);
                    target.patch.onUpdate({key: e.key, value: e.value, patch: target.patch, _id: target.patch._id});
                }
            }
        })
        source.patch.set(source.field, source.patch.props[source.field]);
        this._connections.push({s: source.patch._id, sField: source.field, t: target.patch._id, tField: target.field})
    }
}

interface ITargetConnect {
   patch: any,
   field: string
}

interface ISourceConnect {
    patch: any,
    field: string
}

export interface IWorldEvent {
    _id: string,
    key: string,
    value: any;
}

export const World = new WorldT();