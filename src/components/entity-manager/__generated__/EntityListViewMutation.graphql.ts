/**
 * @generated SignedSource<<6e0df03324cd460e7ab5c70814535fc1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type EntityListViewMutation$variables = {
  idList: ReadonlyArray<string>;
};
export type EntityListViewMutation$data = {
  readonly deleteDomainEntities: {
    readonly long: ReadonlyArray<any> | null;
  };
};
export type EntityListViewMutation = {
  response: EntityListViewMutation$data;
  variables: EntityListViewMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "idList"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "idList",
            "variableName": "idList"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "DeleteDomainEntitiesPayload",
    "kind": "LinkedField",
    "name": "deleteDomainEntities",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "long",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EntityListViewMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EntityListViewMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "262382dfb18585e2dea1c91af04b8ba7",
    "id": null,
    "metadata": {},
    "name": "EntityListViewMutation",
    "operationKind": "mutation",
    "text": "mutation EntityListViewMutation(\n  $idList: [String!]!\n) {\n  deleteDomainEntities(input: {idList: $idList}) {\n    long\n  }\n}\n"
  }
};
})();

(node as any).hash = "ad280872acabac1cbe19929dc1e93359";

export default node;
