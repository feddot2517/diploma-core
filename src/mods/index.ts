import { Value } from './calc/Value';
import { Logger } from './calc/Logger';
import { Render } from './react/Render';
import { Plus } from './calc/Plus';
import { HtmlHeader } from './html/HtmlHeader';
import { Router } from './react/Router';
import { Component } from './react/Component';
import { Route } from './react/Route';
import { RenderHtmlHeader } from './html/RenderHtml';

export const mods = [
    {name: 'Value', patch: Value},
    {name: 'Logger', patch: Logger},
    {name: 'Render', patch: Render},
    {name: 'Plus', patch: Plus},
    {name: 'HtmlHeader', patch: HtmlHeader},
    {name: 'Router', patch: Router},
    {name: 'Component', patch: Component},
    {name: 'Route', patch: Route},
    {name: 'RenderHtml', patch: RenderHtmlHeader}
]