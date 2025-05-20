import fastify from "fastify";
import autoLoad from '@fastify/autoload';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import 'dotenv/config';


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = fastify({
    logger: true
});

const getPort = () => {
    const port = +process.env.DOLC_PORT;
    return isNaN(port) ? 7000 : port;
}


const getUrl = () => {
    const url = process.env.URL;
    return url ?? 'localhost';
}

app.decorate('config', {
    port: getPort(),
    url: getUrl()
});

await app.register(autoLoad, {
    dir: join(__dirname, 'plugins'),
    encapsulate: false
});

await app.register(autoLoad, {
    dir: join(__dirname, 'routes'),
    routeParams: true
});





await app.listen({port: app.config.port});