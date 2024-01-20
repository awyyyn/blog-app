import express from 'express';
import { router } from './routes/index';
import cors from 'cors';
import { server } from './graphql/graphql-server';
import { expressMiddleware } from '@apollo/server/express4';
// import { prisma } from './prisma';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

(async () => {
  await server.start();
  app.use('/graphql', expressMiddleware(server));
})();

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
