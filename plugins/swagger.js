import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";


export default async function(app, opts) {
    await app.register(fastifySwagger, {
        openapi: {
            openapi: '3.0.0',
            info: {
              title: 'Demo mongodb',
              description: 'Esempio di uso di MongoDb in fastify',
              version: '0.1.0'
            },
            servers: [
              {
                url: `http://${app.config.url}:${app.config.port}`,
                description: 'Development server'
              }
            ],
            tags: [],
            components: {},
            externalDocs: {}
        }
    });

    await app.register(fastifySwaggerUi, {
        routePrefix: '/documentation',
    })
}