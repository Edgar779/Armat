import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerUtil } from './util/swagger.util';
import * as session from 'express-session';
import { PORT } from './util/constants';
import { AlgoliaService } from './algolia/algolia.service';

export async function bootstrap() {
  const swaggerUtil = new SwaggerUtil();
  const app = await NestFactory.create(AppModule);

  /** algolia setup */
  const algoliaService = app.get(AlgoliaService);
  await algoliaService.setup();

  // Middlewares
  app.enableCors();
  app.use(
    session({
      secret: 'my-secret',
      resave: false,
      saveUninitialized: false,
    }),
  );

  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  //swagger documentation setup
  swaggerUtil.setupSwagger(app);

  await app.listen(PORT).then(() => console.log(`server running on port ${PORT}`));
}
bootstrap();
