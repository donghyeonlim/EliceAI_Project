import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import * as config from 'config';
import { GlobalExceptionFilter } from './exception/globalexception.filter';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
    const logger = new Logger();
    const app = await NestFactory.create(AppModule, { cors: true });

    app.useGlobalFilters(new GlobalExceptionFilter());

    const port = config.get<number>('server.port'); // port config

    const swaggerConfig = new DocumentBuilder()
        .setTitle('users api test')
        .setDescription('nest js swagger test')
        .setVersion('1.0.0')
        .addTag('users')
        .addBearerAuth()
        .build();

    const swaggerDocs = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('api', app, swaggerDocs);

    app.use(cookieParser());
    await app.listen(port);
    logger.log(`application run in ${port}`);
}
bootstrap();
