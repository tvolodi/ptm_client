/**
 * @generated SignedSource<<a2e8881a171c6ac151ceed89a9027f34>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityItemDetailsFragment$data = {
  readonly description: string | null;
  readonly id: string;
  readonly module: {
    readonly code: string;
    readonly id: string | null;
    readonly name: string;
  };
  readonly name: string;
  readonly pluralName: string;
  readonly " $fragmentType": "EntityItemDetailsFragment";
};
export type EntityItemDetailsFragment$key = {
  readonly " $data"?: EntityItemDetailsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityItemDetailsFragment">;
};

const node: ReaderFragment = (function(){
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
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityItemDetailsFragment",
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
  "type": "DomainEntity",
  "abstractKey": null
};
})();

(node as any).hash = "87670d9cae5b0998734036dc4dab7f40";

export default node;
