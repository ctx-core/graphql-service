import type { Request, Response } from 'express'
import { flatten } from '@ctx-core/array'
import { express_graphql_upload } from './express_graphql_upload'
export async function polka_graphql_upload(req:Request, res:Response, next:()=>void) {
	const { headers } = req
	req.is || (req.is = content_type=>{
		const content_type_a = flatten([content_type]) as string[]
		return (
			headers['content-type']
			? (
				content_type_a.find(
					(content_type:string)=>
						~(headers['content-type'] || '').indexOf(content_type)
				) || false)
			: null)
	})
	await new Promise(async (resolve, reject)=>{
		express_graphql_upload(req, res, (e:any)=>e ? reject(e) : resolve(null))
	})
	next()
}
export { polka_graphql_upload as graphql_upload__polka }
