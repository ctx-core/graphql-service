import { graphqlUploadExpress } from 'graphql-upload'
import type { RequestHandler } from 'express'
export const express_graphql_upload:RequestHandler = graphqlUploadExpress()
