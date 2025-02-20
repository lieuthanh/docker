import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors() //mở hết
  const config = new DocumentBuilder().setTitle("Swagger").build()
  const document = SwaggerModule.createDocument(app,config)
  SwaggerModule.setup("/swagger",app,document)

  await app.listen(8080);
}
bootstrap();
