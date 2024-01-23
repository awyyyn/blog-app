import express from 'express';
import { router } from './routes/index';
import cors from 'cors';
import { expressMiddleware } from '@apollo/server/express4';
import { authRouter } from './routes/auth-routes';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';
import { ApolloServer } from '@apollo/server';
import { resolvers } from './graphql/resolvers';
import { typeDefs } from './graphql/schema';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { createServer } from 'http';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

/* execute gql schema */
const schema = makeExecutableSchema({ typeDefs, resolvers });

/* create server */
const httpServer = createServer(app);

/* web socket server */
const wsServer = new WebSocketServer({
  server: httpServer,
  path: '/graphql',
});
const serverCleanup = useServer({ schema }, wsServer);

/* express api */
app.use('/', authRouter);

/* gql server */
export const server = new ApolloServer({
  schema,
  plugins: [
    ApolloServerPluginDrainHttpServer({ httpServer }),
    {
      async serverWillStart() {
        return {
          async drainServer() {
            await serverCleanup.dispose();
          },
        };
      },
    },
  ],
});

/* start gql server */
(async () => {
  await server.start();
  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    express.json(),
    expressMiddleware(server)
  );
})();

httpServer.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
