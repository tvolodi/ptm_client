/**
 * @generated SignedSource<<3c6c7c9144408eccbe3daf5f12c6ff6d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type DataDesignerViewEntitiesQuery$variables = {};
export type DataDesignerViewEntitiesQuery$data = {
  readonly domainEntities: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly attributes: ReadonlyArray<{
          readonly dataType: {
            readonly code: string;
            readonly id: string | null;
            readonly name: string;
          };
          readonly description: string | null;
          readonly entityLink: {
            readonly id: string;
            readonly module: {
              readonly id: string | null;
              readonly name: string;
            };
            readonly name: string;
          } | null;
          readonly hasIndex: boolean | null;
          readonly id: string;
          readonly isNullable: boolean | null;
          readonly name: string;
        }> | null;
        readonly description: string | null;
        readonly id: string;
        readonly module: {
          readonly code: string;
          readonly id: string | null;
          readonly name: string;
        };
        readonly name: string;
        readonly pluralName: string;
      };
    }> | null;
  } | null;
};
export type DataDesignerViewEntitiesQuery = {
  response: DataDesignerViewEntitiesQuery$data;
  variables: DataDesignerViewEntitiesQuery$variables;
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
  "name": "description",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = [
  (v0/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "code",
    "storageKey": null
  },
  (v2/*: any*/)
],
v4 = [
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
              (v1/*: any*/),
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "pluralName",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Module",
                "kind": "LinkedField",
                "name": "module",
                "plural": false,
                "selections": (v3/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "DomainEntityAttribute",
                "kind": "LinkedField",
                "name": "attributes",
                "plural": true,
                "selections": [
                  (v0/*: any*/),
                  (v2/*: any*/),
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "DataType",
                    "kind": "LinkedField",
                    "name": "dataType",
                    "plural": false,
                    "selections": (v3/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "isNullable",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hasIndex",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "DomainEntity",
                    "kind": "LinkedField",
                    "name": "entityLink",
                    "plural": false,
                    "selections": [
                      (v0/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Module",
                        "kind": "LinkedField",
                        "name": "module",
                        "plural": false,
                        "selections": [
                          (v0/*: any*/),
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v2/*: any*/)
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
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "DataDesignerViewEntitiesQuery",
    "selections": (v4/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "DataDesignerViewEntitiesQuery",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "e1883ec59b729c76699158f3bb1cfee4",
    "id": null,
    "metadata": {},
    "name": "DataDesignerViewEntitiesQuery",
    "operationKind": "query",
    "text": "query DataDesignerViewEntitiesQuery {\n  domainEntities {\n    edges {\n      node {\n        id\n        description\n        name\n        pluralName\n        module {\n          id\n          code\n          name\n        }\n        attributes {\n          id\n          name\n          description\n          dataType {\n            id\n            code\n            name\n          }\n          isNullable\n          hasIndex\n          entityLink {\n            id\n            module {\n              id\n              name\n            }\n            name\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "ab8d320dd7110f6620c4f2656275ee18";

export default node;
