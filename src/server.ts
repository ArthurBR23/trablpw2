import fastify from "fastify";

const app = fastify();

app.listen({
    port:3333,
}).then(() => {
    console.log('HTTP Server Running On Port 3333')
});