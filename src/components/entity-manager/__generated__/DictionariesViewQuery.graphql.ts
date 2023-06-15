/**
 * @generated SignedSource<<159f760aa582089130e101ce7848ab5a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type DictionariesViewQuery$variables = {};
export type DictionariesViewQuery$data = {
  readonly domainEntities: {
    readonly edges: ReadonlyArray<{
      readonly cursor: string;
      readonly node: {
        readonly description: string | null;
        readonly id: string;
        readonly module: {
          readonly code: string;
          readonly id: string | null;
          readonly name: string;
        };
        readonly name: string;
      };
    }> | null;
    readonly pageInfo: {
      readonly endCursor: string | null;
      readonly hasNextPage: boolean;
      readonly hasPreviousPage: boolean;
      readonly startCursor: string | null;
    };
    readonly totalCount: number;
  } | null;
};
export type DictionariesViewQuery = {
  response: DictionariesViewQuery$data;
  variables: DictionariesViewQuery$variables;
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
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "first",
        "value": 100
      },
      {
        "kind": "Literal",
        "name": "order",
        "value": [
          {
            "name": "DESC"
          }
        ]
      }
    ],
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
            "kind": "ScalarField",
            "name": "cursor",
            "storageKey": null
          },
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
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "PageInfo",
        "kind": "LinkedField",
        "name": "pageInfo",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "hasNextPage",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "hasPreviousPage",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "startCursor",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "endCursor",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "totalCount",
        "storageKey": null
      }
    ],
    "storageKey": "domainEntities(first:100,order:[{\"name\":\"DESC\"}])"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "DictionariesViewQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "DictionariesViewQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "055bc7b5b222794f1da150233f8015e8",
    "id": null,
    "metadata": {},
    "name": "DictionariesViewQuery",
    "operationKind": "query",
    "text": "query DictionariesViewQuery {\n  domainEntities(first: 100, order: [{name: DESC}]) {\n    edges {\n      cursor\n      node {\n        id\n        description\n        name\n        module {\n          id\n          code\n          name\n        }\n      }\n    }\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n    totalCount\n  }\n}\n"
  }
};
})();

(node as any).hash = "0e0077465ee0d8879864bbda9c9f6ee0";

export default node;
