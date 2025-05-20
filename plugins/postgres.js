import fastifyPostgres from '@fastify/postgres';

export default async function(app, opts) {
    await app.register(fastifyPostgres, {
        connectionString: 'postgres://postgres:password@localhost/dolc'
    });
}