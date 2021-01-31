import type { GraphQLSchema } from '@ctx-core/graphql'
/**
 * @typedef express_graphql_opts
 * @property {GraphQLSchema} schema
 * @property {boolean} [graphiql]
 * @property [rootValue]
 * @property {boolean} [pretty]
 * @property {function} [formatError]
 * @property {[]} [validationRules]
 */
export interface express_graphql_opts {
	schema:GraphQLSchema
	graphiql?:boolean
	rootValue?:unknown
	pretty:boolean
	formatError?:Function
	validationRules?:[]
}
