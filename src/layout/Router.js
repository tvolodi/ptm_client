import { graphql } from 'babel-plugin-relay/macro';
import { BrowserProtocol, queryMiddleware } from 'farce';
import {
    createFarceRouter,
    createRender,
    makeRouteConfig,
    Route
} from 'found';
import App from '../App';

import { Resolver } from 'found-relay';

const Router = createFarceRouter({
    historyProtocol: new BrowserProtocol(),
    historyMiddlewares: [queryMiddleware],
    routeConfig: makeRouteConfig(
        <Route
            path='/'
            Component={App}
            query={graphql`
            `
            }
        >
            <Route path="data-designer">

            </Route>
        </Route>
    ),
    render: createRender({}),
});

export default Router;