import { NestFactory } from '@nestjs/core';
import * as morgan from 'morgan'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Procedurize')
    .setDescription('The Procedurize API description')
    .setVersion('1.0')
    .addTag('procedurize')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  app.use(morgan('dev'))
  await app.listen(3000);
}
bootstrap();
