import JSResource from './JSResource';
import { loadQuery } from 'react-relay';
import RelayEnvironment from '../contexts/graphql-environment';

const routes = [
    {
        component: JSResource('AppLayout', () => import('../layout/AppLayout')),
        prepare: null,
        routes: [
            {
                path: '/',
                exact: true,
                component: JSResource('Layout', () => import('../layout/Layout')),
                routes: [
                    {
                        path: 'data_designer',
                        component: JSResource('DataDesignerView', 
                                                () => import('../components/entity-manager/data-designer/DataDesignerView')),
                        prepare: params => {
                            const DataDesignerViewQuery = require('../components/entity-manager/data-designer/__generated__/DataDesignerViewQuery.graphql');
                            return {
                                dataDesignerViewQuery: loadQuery(
                                    RelayEnvironment,
                                    DataDesignerViewQuery,
                                    {},
                                    { fetchPolicy: 'store-or-network'},
                                )
                            };
                        }
                    }
                ],
            }
        ]
    }
];
