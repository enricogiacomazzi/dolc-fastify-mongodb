
import S from 'fluent-json-schema';


export default async function(app, opts) {
    app.get('/', async (req, res) => {
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