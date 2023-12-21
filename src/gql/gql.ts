/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\nquery GetAllEvent {\n    allShifts{\n        creator{\n          displayName\n        }\n        gadget{\n            iconLink\n          }\n          description\n          start{\n              dateTimeDateTimeOffset\n          }\n          end{\n              dateTimeDateTimeOffset\n          }\n          \n      }\n}\n": types.GetAllEventDocument,
    "\nquery GetEvent($employeeName: String!) {\n  get(employeeName: $employeeName){\n    gadget{\n        iconLink\n      }\n      description\n      start{\n          dateTimeDateTimeOffset\n      }\n      end{\n          dateTimeDateTimeOffset\n      }\n      \n  }\n}\n": types.GetEventDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery GetAllEvent {\n    allShifts{\n        creator{\n          displayName\n        }\n        gadget{\n            iconLink\n          }\n          description\n          start{\n              dateTimeDateTimeOffset\n          }\n          end{\n              dateTimeDateTimeOffset\n          }\n          \n      }\n}\n"): (typeof documents)["\nquery GetAllEvent {\n    allShifts{\n        creator{\n          displayName\n        }\n        gadget{\n            iconLink\n          }\n          description\n          start{\n              dateTimeDateTimeOffset\n          }\n          end{\n              dateTimeDateTimeOffset\n          }\n          \n      }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery GetEvent($employeeName: String!) {\n  get(employeeName: $employeeName){\n    gadget{\n        iconLink\n      }\n      description\n      start{\n          dateTimeDateTimeOffset\n      }\n      end{\n          dateTimeDateTimeOffset\n      }\n      \n  }\n}\n"): (typeof documents)["\nquery GetEvent($employeeName: String!) {\n  get(employeeName: $employeeName){\n    gadget{\n        iconLink\n      }\n      description\n      start{\n          dateTimeDateTimeOffset\n      }\n      end{\n          dateTimeDateTimeOffset\n      }\n      \n  }\n}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;