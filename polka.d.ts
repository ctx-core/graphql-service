import { GraphQLSchema, TypeDefs, Resolvers } from '@ctx-core/graphql';
/**
 * @typedef opts__express_graphql
 * @property {GraphQLSchema} schema
 * @property {boolean} [graphiql]
 * @property [rootValue]
 * @property {boolean} [pretty]
 * @property {function} [formatError]
 * @property {[]} [validationRules]
 */
export declare type opts__express_graphql = {
    schema: GraphQLSchema;
    graphiql?: boolean;
    rootValue?: any;
    pretty: boolean;
    formatError?: Function;
    validationRules?: [];
};
export declare function graphql_upload__polka(req: any, res: any, next: any): Promise<void>;
/**
 * @typedef params__ApolloServer
 * @property {TypeDefs} typeDefs
 * @property {Resolvers|Resolvers[]} resolvers
 */
export declare type params__ApolloServer = {
    typeDefs: TypeDefs;
    resolvers: Resolvers | Resolvers[];
};
