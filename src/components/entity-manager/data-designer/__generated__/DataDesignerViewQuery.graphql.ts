/**
 * @generated SignedSource<<d6c952ac9b9de96a170bd5fc70023efd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DataDesignerViewQuery$variables = {};
export type DataDesignerViewQuery$data = {
  readonly domainEntities: {
    readonly " $fragmentSpreads": FragmentRefs<"EntityListViewFragment">;
  } | null;
};
export type DataDesignerViewQuery = {
  response: DataDesignerViewQuery$data;
  variables: DataDesignerViewQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "DataDesignerViewQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "DomainEntitiesConnection",
        "kind": "LinkedField",
        "name": "domainEntities",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "EntityListViewFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "DataDesignerViewQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "DomainEntitiesConnection",
        "kind": "LinkedField",
        "name": "domainEntities",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "DomainEntitiesEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "DomainEntity",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "description",
                    "storageKey": null
                  },
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Module",
                    "kind": "LinkedField",
                    "name": "module",
                    "plural": false,
                    "selections": [
                      (v0/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "code",
                        "storageKey": null
                      },
                      (v1/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "478f0e1c918f795a1cf6771aa40eafe0",
    "id": null,
    "metadata": {},
    "name": "DataDesignerViewQuery",
    "operationKind": "query",
    "text": "query DataDesignerViewQuery {\n  domainEntities {\n    ...EntityListViewFragment\n  }\n}\n\nfragment EntityItemDetailsFragment on DomainEntity {\n  id\n  description\n  name\n  module {\n    id\n    code\n    name\n  }\n}\n\nfragment EntityListViewFragment on DomainEntitiesConnection {\n  edges {\n    node {\n      ...EntityItemDetailsFragment\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "dcad451f3b26748d0355562acee56de2";

export default node;
