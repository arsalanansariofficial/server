import { staticPlugin } from '@elysia/static';
import { cors } from '@elysia/cors';
import { Elysia } from 'elysia';

import { routes as userRoutes } from '@/modules/user';
import { errorPlugin } from '@/lib/error';
import { authRoutes } from '@/lib/auth';
import { env } from '@/lib/config';

export type App = typeof app;

export const app = new Elysia({ name: 'App.Routes', prefix: '/api' })
  .use(staticPlugin())
  .use(errorPlugin)
  .use(cors())
  .use(authRoutes)
  .use(userRoutes);

app.listen(env.PORT);
