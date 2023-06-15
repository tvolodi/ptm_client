/**
 * @generated SignedSource<<3eb682a192d158731e032f8adfdbb574>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityListViewFragment$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly " $fragmentSpreads": FragmentRefs<"EntityItemDetailsFragment">;
    };
  }> | null;
  readonly " $fragmentType": "EntityListViewFragment";
};
export type EntityListViewFragment$key = {
  readonly " $data"?: EntityListViewFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityListViewFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityListViewFragment",
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
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "EntityItemDetailsFragment"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "DomainEntitiesConnection",
  "abstractKey": null
};

(node as any).hash = "5a642c928d7f450a1e0ef901fce976c5";

export default node;
