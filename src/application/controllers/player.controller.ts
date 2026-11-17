// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { Controller, Get, HttpException, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import { RankingService } from '../../domain/services/ranking.service';
import { Player } from '../../domain/models/player.model';

@Controller('ranking')
export class PlayerController {
  constructor(private readonly rankingService: RankingService) {}

  getRanking(req: Request, res: Response): void {
    throw new Error('TODO(reto): getRanking');
  }
}