/**
 * @generated SignedSource<<6178e43a80c8101914cad442bd4ad473>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type DataDesignerViewDataTypesQuery$variables = {};
export type DataDesignerViewDataTypesQuery$data = {
  readonly dataTypes: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly code: string;
        readonly id: string | null;
        readonly name: string;
      };
    }> | null;
  } | null;
};
export type DataDesignerViewDataTypesQuery = {
  response: DataDesignerViewDataTypesQuery$data;
  variables: DataDesignerViewDataTypesQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "DataTypesConnection",
    "kind": "LinkedField",
    "name": "dataTypes",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "DataTypesEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "DataType",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "code",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
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
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "DataDesignerViewDataTypesQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "DataDesignerViewDataTypesQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "5fe2a58c389dc9aedf37623e73613894",
    "id": null,
    "metadata": {},
    "name": "DataDesignerViewDataTypesQuery",
    "operationKind": "query",
    "text": "query DataDesignerViewDataTypesQuery {\n  dataTypes {\n    edges {\n      node {\n        id\n        code\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "13e99dd5b5516a52ccb20d6ed31617b6";

export default node;
