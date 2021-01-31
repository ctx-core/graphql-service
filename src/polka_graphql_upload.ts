import { express_graphql_upload } from './express_graphql_upload'
export async function polka_graphql_upload(req, res, next) {
	const { headers } = req
	req.is || (req.is = content_type__=>{
		return (
			headers['content-type']
			&& headers['content-type'].indexOf(content_type__) > -1
		)
	})
	await new Promise(async (resolve, reject)=>{
		express_graphql_upload(req, res, e=>e ? reject(e) : resolve(null))
	})
	next()
}
export {
	polka_graphql_upload as graphql_upload__polka
}