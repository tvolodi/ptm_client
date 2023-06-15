/**
 * @generated SignedSource<<8a03e80574dc8e748d6eaaa5add54f99>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ModuleInput = {
  code: string;
  creationDateTime?: any | null;
  domainEntities?: ReadonlyArray<DomainEntityInput> | null;
  id?: string | null;
  name: string;
  updateDateTime?: any | null;
};
export type DomainEntityInput = {
  attributes?: ReadonlyArray<DomainEntityAttributeInput> | null;
  creationDateTime?: any | null;
  description?: string | null;
  id?: string | null;
  module: ModuleInput;
  name: string;
  pluralName: string;
  referencedLinks?: ReadonlyArray<DomainEntityAttributeInput> | null;
  updateDateTime?: any | null;
};
export type DomainEntityAttributeInput = {
  creationDateTime?: any | null;
  dataType: DataTypeInput;
  description?: string | null;
  domainEntity: DomainEntityInput;
  entityLink?: DomainEntityInput | null;
  hasIndex?: boolean | null;
  id?: string | null;
  isNullable?: boolean | null;
  name: string;
  updateDateTime?: any | null;
};
export type DataTypeInput = {
  code: string;
  creationDateTime?: any | null;
  id?: string | null;
  name: string;
  updateDateTime?: any | null;
};
export type EntityItemDetailsMutation$variables = {
  attributes?: ReadonlyArray<DomainEntityAttributeInput> | null;
  description?: string | null;
  id?: string | null;
  module: ModuleInput;
  name: string;
  pluralName: string;
};
export type EntityItemDetailsMutation$data = {
  readonly domainEntity: {
    readonly domainEntity: {
      readonly attributes: ReadonlyArray<{
        readonly dataType: {
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
      };
      readonly name: string;
      readonly pluralName: string;
    } | null;
  };
};
export type EntityItemDetailsMutation = {
  response: EntityItemDetailsMutation$data;
  variables: EntityItemDetailsMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "attributes"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "description"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "module"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "pluralName"
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v9 = [
  (v6/*: any*/),
  (v7/*: any*/)
],
v10 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "attributes",
            "variableName": "attributes"
          },
          {
            "kind": "Variable",
            "name": "description",
            "variableName": "description"
          },
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id"
          },
          {
            "kind": "Variable",
            "name": "module",
            "variableName": "module"
          },
          {
            "kind": "Variable",
            "name": "name",
            "variableName": "name"
          },
          {
            "kind": "Variable",
            "name": "pluralName",
            "variableName": "pluralName"
          }
        ],
        "kind": "ObjectValue",
        "name": "domainEntity"
      }
    ],
    "concreteType": "DomainEntityPayload",
    "kind": "LinkedField",
    "name": "domainEntity",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "DomainEntity",
        "kind": "LinkedField",
        "name": "domainEntity",
        "plural": false,
        "selections": [
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
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
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "code",
                "storageKey": null
              },
              (v6/*: any*/)
            ],
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
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
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
                  (v6/*: any*/),
                  (v7/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Module",
                    "kind": "LinkedField",
                    "name": "module",
                    "plural": false,
                    "selections": (v9/*: any*/),
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "DataType",
                "kind": "LinkedField",
                "name": "dataType",
                "plural": false,
                "selections": (v9/*: any*/),
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "EntityItemDetailsMutation",
    "selections": (v10/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v1/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/),
      (v3/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "EntityItemDetailsMutation",
    "selections": (v10/*: any*/)
  },
  "params": {
    "cacheID": "7747f9937740418e84d9bdce98ce309e",
    "id": null,
    "metadata": {},
    "name": "EntityItemDetailsMutation",
    "operationKind": "mutation",
    "text": "mutation EntityItemDetailsMutation(\n  $id: ID\n  $description: String\n  $name: String!\n  $pluralName: String!\n  $module: ModuleInput!\n  $attributes: [DomainEntityAttributeInput!]\n) {\n  domainEntity(domainEntity: {id: $id, description: $description, name: $name, pluralName: $pluralName, module: $module, attributes: $attributes}) {\n    domainEntity {\n      id\n      name\n      description\n      pluralName\n      module {\n        code\n        id\n      }\n      attributes {\n        id\n        name\n        description\n        isNullable\n        hasIndex\n        entityLink {\n          id\n          name\n          module {\n            id\n            name\n          }\n        }\n        dataType {\n          id\n          name\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "10a25033fdd9a00630a9e06163c61432";

export default node;
