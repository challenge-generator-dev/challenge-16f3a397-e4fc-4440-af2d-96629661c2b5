import { Module } from '@nestjs/common';
import { PlayerController } from './application/controllers/player.controller';
import { RankingService } from './domain/services/ranking.service';
import { PlayerRepository } from './infrastructure/repositories/player.repository';

@Module({
  controllers: [PlayerController],
  providers: [RankingService, PlayerRepository],
})
export class AppModule {}