/**
 * @generated SignedSource<<8ccb9e971c085b0810ddb032a1edf34d>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type DictionariesViewQuery$variables = {||};
export type DictionariesViewQuery$data = {|
  +modules: ?{|
    +edges: ?$ReadOnlyArray<{|
      +cursor: string,
      +node: {|
        +code: string,
        +id: ?string,
        +name: string,
      |},
    |}>,
    +pageInfo: {|
      +endCursor: ?string,
      +hasNextPage: boolean,
      +hasPreviousPage: boolean,
      +startCursor: ?string,
    |},
    +totalCount: number,
  |},
|};
export type DictionariesViewQuery = {|
  response: DictionariesViewQuery$data,
  variables: DictionariesViewQuery$variables,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "first",
        "value": 10
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
            "kind": "ScalarField",
            "name": "cursor",
            "storageKey": null
          },
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
    "storageKey": "modules(first:10,order:[{\"name\":\"DESC\"}])"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "DictionariesViewQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "DictionariesViewQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "ba3312d7e3a7501ed8d3dfbde20ac2f9",
    "id": null,
    "metadata": {},
    "name": "DictionariesViewQuery",
    "operationKind": "query",
    "text": "query DictionariesViewQuery {\n  modules(first: 10, order: [{name: DESC}]) {\n    edges {\n      cursor\n      node {\n        id\n        code\n        name\n      }\n    }\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n    totalCount\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "572ee57208a6824db12dde629fac3a69";

module.exports = ((node/*: any*/)/*: Query<
  DictionariesViewQuery$variables,
  DictionariesViewQuery$data,
>*/);
