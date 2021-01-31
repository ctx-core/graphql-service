import type { Resolvers, TypeDefs } from '@ctx-core/graphql'
/**
 * @typedef ApolloServer_params
 * @property {TypeDefs} typeDefs
 * @property {Resolvers|Resolvers[]} resolvers
 */
export interface ApolloServer_params {
	typeDefs:TypeDefs
	resolvers:Resolvers|Resolvers[]
}
