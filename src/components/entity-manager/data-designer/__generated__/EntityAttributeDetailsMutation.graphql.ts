/**
 * @generated SignedSource<<9d2f59d26aa230bda18132f00078ba6d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
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
export type ModuleInput = {
  code: string;
  creationDateTime?: any | null;
  domainEntities?: ReadonlyArray<DomainEntityInput> | null;
  id?: string | null;
  name: string;
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
export type EntityAttributeDetailsMutation$variables = {
  dataType: DataTypeInput;
  description?: string | null;
  domainEntity: DomainEntityInput;
  entityLink?: DomainEntityInput | null;
  hasIndex?: boolean | null;
  id?: string | null;
  isNullable?: boolean | null;
  name: string;
};
export type EntityAttributeDetailsMutation$data = {
  readonly domainEntityAttribute: {
    readonly domainEntityAttribute: {
      readonly dataType: {
        readonly code: string;
        readonly id: string | null;
        readonly name: string;
      };
      readonly description: string | null;
      readonly domainEntity: {
        readonly id: string;
        readonly name: string;
      };
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
    } | null;
  };
};
export type EntityAttributeDetailsMutation = {
  response: EntityAttributeDetailsMutation$data;
  variables: EntityAttributeDetailsMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "dataType"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "description"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "domainEntity"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "entityLink"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "hasIndex"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v6 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "isNullable"
},
v7 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v10 = [
  (v8/*: any*/),
  (v9/*: any*/)
],
v11 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "dataType",
            "variableName": "dataType"
          },
          {
            "kind": "Variable",
            "name": "description",
            "variableName": "description"
          },
          {
            "kind": "Variable",
            "name": "domainEntity",
            "variableName": "domainEntity"
          },
          {
            "kind": "Variable",
            "name": "entityLink",
            "variableName": "entityLink"
          },
          {
            "kind": "Variable",
            "name": "hasIndex",
            "variableName": "hasIndex"
          },
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id"
          },
          {
            "kind": "Variable",
            "name": "isNullable",
            "variableName": "isNullable"
          },
          {
            "kind": "Variable",
            "name": "name",
            "variableName": "name"
          }
        ],
        "kind": "ObjectValue",
        "name": "domainEntityAttribute"
      }
    ],
    "concreteType": "DomainEntityAttributePayload",
    "kind": "LinkedField",
    "name": "domainEntityAttribute",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "DomainEntityAttribute",
        "kind": "LinkedField",
        "name": "domainEntityAttribute",
        "plural": false,
        "selections": [
          (v8/*: any*/),
          (v9/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "description",
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
            "name": "domainEntity",
            "plural": false,
            "selections": (v10/*: any*/),
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
              (v8/*: any*/),
              (v9/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Module",
                "kind": "LinkedField",
                "name": "module",
                "plural": false,
                "selections": (v10/*: any*/),
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
            "selections": [
              (v8/*: any*/),
              (v9/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "code",
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
      (v5/*: any*/),
      (v6/*: any*/),
      (v7/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "EntityAttributeDetailsMutation",
    "selections": (v11/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v5/*: any*/),
      (v1/*: any*/),
      (v7/*: any*/),
      (v2/*: any*/),
      (v0/*: any*/),
      (v6/*: any*/),
      (v4/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Operation",
    "name": "EntityAttributeDetailsMutation",
    "selections": (v11/*: any*/)
  },
  "params": {
    "cacheID": "e8a396ad4ebf9e00700fe4d0e84a44a8",
    "id": null,
    "metadata": {},
    "name": "EntityAttributeDetailsMutation",
    "operationKind": "mutation",
    "text": "mutation EntityAttributeDetailsMutation(\n  $id: ID\n  $description: String\n  $name: String!\n  $domainEntity: DomainEntityInput!\n  $dataType: DataTypeInput!\n  $isNullable: Boolean\n  $hasIndex: Boolean\n  $entityLink: DomainEntityInput\n) {\n  domainEntityAttribute(domainEntityAttribute: {id: $id, description: $description, name: $name, domainEntity: $domainEntity, dataType: $dataType, isNullable: $isNullable, hasIndex: $hasIndex, entityLink: $entityLink}) {\n    domainEntityAttribute {\n      id\n      name\n      description\n      isNullable\n      hasIndex\n      domainEntity {\n        id\n        name\n      }\n      entityLink {\n        id\n        name\n        module {\n          id\n          name\n        }\n      }\n      dataType {\n        id\n        name\n        code\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "91a4a4cefd47affd825af4d88acdf24f";

export default node;
