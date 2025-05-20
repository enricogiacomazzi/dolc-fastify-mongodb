


export default async function(app, opts) {
    app.get('/', async (req, res) => {
        const result = await app.pg.query('SELECT * from users');
        return result.rows;
    });
}
