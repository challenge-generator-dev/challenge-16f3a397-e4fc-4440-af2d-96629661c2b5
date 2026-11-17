// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { Injectable } from '@nestjs/common';
import { Player } from '../../domain/models/player.model';

@Injectable()
export class PlayerRepository {
  private players: Player[] = [
    { id: '1', name: 'Juan', score: 150 },
    { id: '2', name: 'María', score: 120 },
    { id: '3', name: 'Carlos', score: 110 },
    { id: '4', name: 'Ana', score: 100 },
    { id: '5', name: 'Luis', score: 95 },
    { id: '6', name: 'Sofía', score: 130 },
    { id: '7', name: 'Miguel', score: 105 },
    { id: '8', name: 'Elena', score: 115 },
    { id: '9', name: 'Jorge', score: 125 },
    { id: '10', name: 'Carmen', score: 140 },
    { id: '11', name: 'Raúl', score: 135 },
    { id: '12', name: 'Paula', score: 100 },
    { id: '13', name: 'Ñoño', score: 150 },
    { id: '14', name: 'José', score: 110 },
    { id: '15', name: 'Ángel', score: 120 },
  ];

  async findAll(): Promise<Player[]> {
    throw new Error('TODO(reto): findAll');
  }
}