

// export default async function(app, opts) {
//     app.get('/', async (req, res) => {
//         const users = await app.pg.query('SELECT * from users').then(x => x.rows);
//         const posts = await app.pg.query('SELECT * from posts').then(x => x.rows);

//         for(const u of users) {
//             u.posts = posts.filter(p => p.userid === u.id);
//         }

//         return users;
//     });
// }

export default async function(app, opts) {
    app.get('/', async (req, res) => {
        const result = await app.pg.query('SELECT u.id, u.firstname, u.lastname, p.id as postId, p.body FROM users u LEFT JOIN posts p ON u.id = p.userId');

        const users = [];
        for(const x of result.rows) {
            let user = users.find(u => u.id === x.id);
            if(!user) {
                user = {
                    id: x.id,
                    firstname: x.firstname,
                    lastname: x.lastname,
                    posts: []
                };
                users.push(user);
            }

            user.posts.push({
                id: x.postId,
                body: x.body
            });
        }

        return users;
    });
}