import { PlayerController } from './player.controller';
import { RankingService } from '../../domain/services/ranking.service';
import { Player } from '../../domain/entities/player.entity';

describe('PlayerController', () => {
  let controller: PlayerController;
  let rankingService: jest.Mocked<RankingService>;

  const mockPlayers: Player[] = [
    new Player(1, 'Juan', 150),
    new Player(2, 'María', 120),
    new Player(3, 'Pedro', 110),
  ];

  const mockRequest = {} as any;
  const mockResponse = () => {
    const res: any = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  };

  beforeEach(() => {
    rankingService = {
      getTopPlayers: jest.fn(),
    } as any;

    controller = new PlayerController(rankingService);
  });

  describe('getRanking', () => {
    it('debe devolver el ranking con código 200 cuando hay jugadores', () => {
      rankingService.getTopPlayers.mockReturnValue(mockPlayers);

      const res = mockResponse();

      controller.getRanking(mockRequest, res);

      expect(rankingService.getTopPlayers).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockPlayers);
    });

    it('debe devolver código 204 cuando no hay jugadores', () => {
      rankingService.getTopPlayers.mockReturnValue([]);

      const res = mockResponse();

      controller.getRanking(mockRequest, res);

      expect(rankingService.getTopPlayers).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(204);
    });

    it('debe manejar errores y devolver código 500', () => {
      rankingService.getTopPlayers.mockImplementation(() => {
        throw new Error('Error de base de datos');
      });

      const res = mockResponse();

      controller.getRanking(mockRequest, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error interno del servidor' });
    });
  });
});