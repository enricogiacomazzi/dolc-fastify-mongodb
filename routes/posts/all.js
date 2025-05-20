
import S from 'fluent-json-schema';


export default async function(app, opts) {

    const schema = {
        querystring: S.object().prop('userId', S.number()),
        response: {
            200: S.array().items(S.object()
                .prop('id', S.number())
                .prop('body', S.string())
            )
        }
    }

    app.get('/', {schema}, async (req, res) => {
        const userId = req.query.userId;
        let result;
        if(!userId) {
            result = await app.pg.query('SELECT * from posts');
        } else {
            result = await app.pg.query('SELECT * from posts WHERE userId = $1', [+userId]);
        }

        return result.rows;
    });
}