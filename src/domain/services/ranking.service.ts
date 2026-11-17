// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { Injectable } from '@nestjs/common';
import { Player } from '../models/player.model';

/**
 * Servicio para calcular el ranking de jugadores.
 * Filtra jugadores con puntuación >= 100 y devuelve los top 10.
 */
@Injectable()
export class RankingService {
  /**
   * Obtiene el top 10 de jugadores con puntuación >= 100.
   * Ordena por puntuación en orden descendente.
   * Soporta correctamente caracteres especiales en nombres.
   */
  getTopPlayers(players: Player[]): Player[] {
    throw new Error('TODO(reto): getTopPlayers');
  }
}