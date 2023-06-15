/**
 * @generated SignedSource<<3a53b753c01cec34f74e7b6abe8473b8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type DataDesignerViewModulesQuery$variables = {};
export type DataDesignerViewModulesQuery$data = {
  readonly modules: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly code: string;
        readonly id: string | null;
        readonly name: string;
      };
    }> | null;
  } | null;
};
export type DataDesignerViewModulesQuery = {
  response: DataDesignerViewModulesQuery$data;
  variables: DataDesignerViewModulesQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ModulesConnection",
    "kind": "LinkedField",
    "name": "modules",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ModulesEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Module",
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
    "name": "DataDesignerViewModulesQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "DataDesignerViewModulesQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "4fb33990d4d82767101f220c4de1c805",
    "id": null,
    "metadata": {},
    "name": "DataDesignerViewModulesQuery",
    "operationKind": "query",
    "text": "query DataDesignerViewModulesQuery {\n  modules {\n    edges {\n      node {\n        id\n        code\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "5fa62287c6d8efb0f7f42ae93a534c7f";

export default node;
