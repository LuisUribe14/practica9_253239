import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { AppModule } from './app.module';
import { ErrorDominioFilter } from './comun/filtros/error-dominio.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use((req, res, next) => {
    res.setHeader('X-Request-Id', randomUUID());
    next();
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );
  app.useGlobalFilters(new ErrorDominioFilter());

  app.enableCors({
    origin: ['http://localhost:5173', 'http://localhost:4200'],
    exposedHeaders: ['Location', 'X-Request-Id'],
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();