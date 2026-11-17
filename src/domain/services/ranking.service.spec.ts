import { Test, TestingModule } from '@nestjs/testing';
import { RankingService } from './ranking.service';
import { PlayerRepository } from '../../infrastructure/repositories/player.repository';
import { Player } from '../models/player.model';

describe('RankingService', () => {
  let service: RankingService;
  let repository: PlayerRepository;

  const mockPlayers: Player[] = [
    { id: 1, name: 'Juan Pérez', score: 150 },
    { id: 2, name: 'María García', score: 200 },
    { id: 3, name: 'Carlos López', score: 80 },
    { id: 4, name: 'Ana Martínez', score: 120 },
    { id: 5, name: 'Pedro Sánchez', score: 180 },
    { id: 6, name: 'Laura Rodríguez', score: 95 },
    { id: 7, name: 'Miguel Fernández', score: 220 },
    { id: 8, name: 'Sofía Torres', score: 110 },
    { id: 9, name: 'Diego Jiménez', score: 130 },
    { id: 10, name: 'Elena Ruiz', score: 170 },
    { id: 11, name: 'Javier Gómez', score: 100 },
    { id: 12, name: 'Carmen Díaz', score: 140 },
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RankingService,
        {
          provide: PlayerRepository,
          useValue: {
            findAll: jest.fn().mockResolvedValue(mockPlayers),
          },
        },
      ],
    }).compile();

    service = module.get<RankingService>(RankingService);
    repository = module.get<PlayerRepository>(PlayerRepository);
  });

  it('debería estar definido', () => {
    expect(service).toBeDefined();
  });

  describe('getTopPlayers', () => {
    it('debería devolver solo jugadores con puntaje >= 100', async () => {
      const result = await service.getTopPlayers(mockPlayers);
      
      result.forEach((player) => {
        expect(player.score).toBeGreaterThanOrEqual(100);
      });
    });

    it('debería devolver los jugadores ordenados por puntaje descendente', async () => {
      const result = await service.getTopPlayers(mockPlayers);
      
      for (let i = 0; i < result.length - 1; i++) {
        expect(result[i].score).toBeGreaterThanOrEqual(result[i + 1].score);
      }
    });

    it('debería devolver máximo 10 jugadores', async () => {
      const result = await service.getTopPlayers(mockPlayers);
      
      expect(result.length).toBeLessThanOrEqual(10);
    });

    it('debería devolver los mejores 10 jugadores ordenados', async () => {
      const result = await service.getTopPlayers(mockPlayers);
      
      const expectedTop = mockPlayers
        .filter((p) => p.score >= 100)
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);
      
      expect(result).toEqual(expectedTop);
    });

    it('debería manejar correctamente caracteres especiales en nombres', async () => {
      const playersWithSpecialChars: Player[] = [
        { id: 1, name: 'Niño José', score: 150 },
        { id: 2, name: 'María José', score: 200 },
        { id: 3, name: 'Pepe Pérez', score: 120 },
      ];
      
      const result = await service.getTopPlayers(playersWithSpecialChars);
      
      expect(result.length).toBe(3);
      expect(result[0].name).toBe('María José');
      expect(result[1].name).toBe('Niño José');
    });

    it('debería devolver array vacío si ningún jugador supera el umbral', async () => {
      const lowScorePlayers: Player[] = [
        { id: 1, name: 'Jugador Uno', score: 50 },
        { id: 2, name: 'Jugador Dos', score: 30 },
      ];
      
      const result = await service.getTopPlayers(lowScorePlayers);
      
      expect(result).toEqual([]);
    });

    it('debería devolver array vacío si no hay jugadores', async () => {
      const result = await service.getTopPlayers([]);
      
      expect(result).toEqual([]);
    });
  });
});