import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { PrismaClientExceptionFilter } from './common/http-exception/http-exception-filter';
import { ResponseInterceptor } from './common/middlewares/global.interceptors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useGlobalInterceptors(new ResponseInterceptor());
  const options = new DocumentBuilder()
    .setTitle('Meraki')
    .setDescription('Some description')
    .setVersion('1.0')
    .addServer(
      process.env.BASE_URL || 'http://209.38.234.216:9000',
      'Render Environment',
    )
    .addServer('http://localhost:9000', 'Local Environment')
    .addTag('Some tag')
    .addBearerAuth()
    .build();

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-doc', app, document);
  await app.listen(3001);
}
bootstrap();
