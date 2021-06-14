import { express_graphql_upload } from './express_graphql_upload';
export async function polka_graphql_upload(req, res, next) {
    const { headers } = req;
    req.is || (req.is = content_type => {
        const content_type_a = [content_type].flat();
        return (headers['content-type']
            ? (content_type_a.find((content_type) => ~(headers['content-type'] || '').indexOf(content_type)) || false)
            : null);
    });
    await new Promise(async (resolve, reject) => {
        express_graphql_upload(req, res, (e) => e ? reject(e) : resolve(null));
    });
    next();
}
export { polka_graphql_upload as graphql_upload__polka };
//# sourceMappingURL=src/polka_graphql_upload.js.map