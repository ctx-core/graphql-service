import type { RequestHandler } from 'express'
import { graphqlUploadExpress } from 'graphql-upload'
export const express_graphql_upload:RequestHandler = graphqlUploadExpress()
