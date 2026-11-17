import { PlayerController } from '../application/controllers/player.controller';
import { RankingService } from '../domain/services/ranking.service';
import { Player } from '../domain/models/player.model';

describe('PlayerController - f3', () => {
  let controller: PlayerController;
  let rankingService: RankingService;
  let mockResponse: any;

  beforeEach(() => {
    rankingService = new RankingService();
    controller = new PlayerController(rankingService);
    
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
  });

  it('should return top 10 players with score >= 100 in descending order', () => {
    const players: Player[] = [
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
    ];

    const mockRequest = { players } as any;
    controller.getRanking(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith(
      expect.objectContaining({
        statusCode: 200,
        data: expect.any(Array),
      })
    );
    
    const jsonCall = mockResponse.json.mock.calls[0][0];
    expect(jsonCall.data.length).toBeLessThanOrEqual(10);
    expect(jsonCall.data[0].score).toBeGreaterThanOrEqual(jsonCall.data[1]?.score || 0);
  });

  it('should return 404 when no players have score >= 100', () => {
    const players: Player[] = [
      { id: '1', name: 'Luis', score: 95 },
      { id: '2', name: 'Ana', score: 80 },
    ];

    const mockRequest = { players } as any;
    controller.getRanking(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(404);
    expect(mockResponse.json).toHaveBeenCalledWith({
      statusCode: 404,
      message: 'No players found',
    });
  });

  it('should return players with special characters sorted correctly', () => {
    const players: Player[] = [
      { id: '1', name: 'Ñoño', score: 150 },
      { id: '2', name: 'José', score: 140 },
      { id: '3', name: 'Ángel', score: 130 },
      { id: '4', name: 'María', score: 120 },
    ];

    const mockRequest = { players } as any;
    controller.getRanking(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(200);
    
    const jsonCall = mockResponse.json.mock.calls[0][0];
    expect(jsonCall.data).toContainEqual(expect.objectContaining({ name: 'Ñoño' }));
    expect(jsonCall.data).toContainEqual(expect.objectContaining({ name: 'José' }));
    expect(jsonCall.data).toContainEqual(expect.objectContaining({ name: 'Ángel' }));
  });
});

describe('PlayerRepository - f3', () => {
  let repository: any;

  beforeEach(() => {
    jest.resetModules();
    repository = require('../infrastructure/repositories/player.repository').PlayerRepository;
  });

  it('should return a list of players', async () => {
    const repo = new repository();
    const players = await repo.findAll();

    expect(Array.isArray(players)).toBe(true);
    expect(players.length).toBeGreaterThan(0);
    expect(players[0]).toHaveProperty('id');
    expect(players[0]).toHaveProperty('name');
    expect(players[0]).toHaveProperty('score');
  });

  it('should handle empty database', async () => {
    const repo = new repository();
    repo.players = [];
    
    const players = await repo.findAll();

    expect(Array.isArray(players)).toBe(true);
    expect(players.length).toBe(0);
  });
});