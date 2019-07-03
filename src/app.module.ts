import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MensagesController } from './mensages/mensages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MensajesService } from './mensages/mensages.service';
import { Mensage } from './mensages/entities/mensage.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestjs_mesages',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Mensage]),
  ],
  controllers: [AppController, MensagesController],
  providers: [AppService, MensajesService],
})
export class AppModule {}
