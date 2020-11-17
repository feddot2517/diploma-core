import express = require('express');
import { mods } from '../mods';
import { Value } from '../mods/calc/Value';
import { Logger } from '../mods/calc/Logger';
import { World } from '../mods/core/World';
import { getRootPath } from '../utils/getRootPath';

export function makeBuild(app: express.Application) {
    app.post('/build', (req, res) => {
        console.log(getRootPath());

        World.clearLogs();
        const { patchTree } = req.body;
        if (!patchTree) return res.send();

        const linksLayer = req.body.patchTree.layers.find((l: any) => l.type==='diagram-links');
        const nodeLayer = req.body.patchTree.layers.find((l: any) => l.type==='diagram-nodes');

        const tree = Object.keys(nodeLayer.models).map(k => {
            const nodeModel = nodeLayer.models[k];
            const targetMod = mods.find(mod => nodeModel.name === mod.name);
            if(!targetMod) return ''
            return {
                _id: nodeModel.id,
                model: nodeModel,
                ports: nodeModel.ports,
                targetMod,
                patch: new targetMod.patch(nodeModel.extraProps),
                extraProps: nodeModel.extraProps
            }
        })

        tree.forEach((branch: any) => {
            branch.ports.forEach((port: any) => {
                if(!port.links.length) return;
                port.links.forEach((linkId: any) => {
                    Object.keys(linksLayer.models).forEach(linkKey => {
                        if(linkKey===linkId) {
                            if(!port.in) {
                                const targetConnectionMod = tree.find((brr: any) => linksLayer.models[linkKey].target === brr._id)
                                if(!targetConnectionMod) return;
                                const targetConnectionPort = targetConnectionMod.ports.find((qwe: any) => {
                                    return qwe.id === linksLayer.models[linkKey].targetPort
                                })
                                World.connect(
                                    { patch: branch.patch, field: port.label },
                                    {patch: targetConnectionMod.patch, field: targetConnectionPort.label})
                            }
                        }
                    })
                })
            })
        })
        // @ts-ignore
        // const value = (tree?.find(t => t.targetMod.name==='Value')?.extraProps?.value || 0)
        // const valuePatch = new Value({value});
        // const logger = new Logger()
        // const logger1 = new Logger()
        // World.connect({field: 'value', patch: valuePatch}, {field: 'value', patch: logger})
        res.send(World.getLogs());
    });
}
