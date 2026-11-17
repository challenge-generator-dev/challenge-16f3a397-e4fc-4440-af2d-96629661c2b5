# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener el proyecto completo y arrancable. Guarda los archivos que te devuelva en la
carpeta del repo, respetando exactamente las rutas.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Superficie de practica — NO resuelvas

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs.

- `src/domain/services/ranking.service.ts` — La pieza p2 (Lógica de negocio para cálculo de rankings, fase f2) vive aqui: este archivo es su unico dueno (blueprint v2).
- `src/application/controllers/player.controller.ts` — La pieza p3 (Implementación de endpoints API, fase f3) vive aqui: este archivo es su unico dueno (blueprint v2).
- `src/infrastructure/repositories/player.repository.ts` — La pieza p4 (Acceso a datos simulado, fase f3) vive aqui: este archivo es su unico dueno (blueprint v2).

## Lo que le falta a este proyecto

Esto NO lo tenes que adivinar: salio de comparar el proyecto contra la arquitectura declarada del reto y de un analisis estatico del codigo. Completalo TODO.

### Archivos que la arquitectura del reto declara y no estan

Creálos con implementacion real, en la capa que les corresponde:

- `src/acceptance/f1.test.ts`
- `src/acceptance/f2.test.ts`

## Como saber que terminaste

```bash
npm install --no-audit --no-fund && npm run build
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Backend, Especialidad Desarrollador, Tecnología Node, Advanced L2

### Brecha de conocimiento
API que calcula un ranking 🏆 de jugadores con puntaje ≥ 100 y devuelve el top 10 → ordenado “descendente”; con ñ y tildes

### Reto
- Tema: Ranking de jugadores con puntaje ≥ 100 → top 10
- Seniority: advanced-l2
- Tipo: practical
- Título: Implementación de API de Ranking de Jugadores
- Tiempo estimado: 8 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Definición del Modelo de Datos — objetivo: Establecer la estructura de datos necesaria para almacenar y recuperar la información de los jugadores. — entregable (NO resolver): Modelo de datos definido y documentado en un archivo de TypeScript con interfaces y tipos.
- Fase 2: Implementación de la Lógica de Negocio — objetivo: Desarrollar la lógica necesaria para calcular el ranking de jugadores. — entregable (NO resolver): Lógica de negocio implementada y documentada.
- Fase 3: Desarrollo de la API — objetivo: Crear la API que expose el ranking de jugadores. — entregable (NO resolver): API implementada y documentada.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (entrega de archivos).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Entrega de archivos
Entregá cada archivo con su ruta completa, respetando exactamente la estructura de rutas
indicada por los marcadores: un bloque por archivo, precedido por su ruta. No generes ZIPs
ni archivos adjuntos.
La entrega debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: Entregá los archivos completos al finalizar. No preguntes si el usuario
quiere recibirlos. Simplemente entregalos; No debes desplegar en el chat el resumen de lo que arreglaste, solo entregá los archivos.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del último archivo entregado
No preguntes si el usuario quiere los archivos: simplemente entregalos siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: package.json ===
{
  "name": "reto-nest",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "build": "tsc -p tsconfig.json",
    "test": "jest"
  },
  "dependencies": {
    "@nestjs/common": "10.4.22",
    "@nestjs/core": "10.4.22",
    "@nestjs/platform-express": "10.4.22",
    "class-transformer": "0.5.1",
    "class-validator": "0.15.1",
    "express": "5.3.0",
    "reflect-metadata": "0.2.2",
    "rxjs": "7.8.2"
  },
  "devDependencies": {
    "@nestjs/testing": "10.4.22",
    "@types/express": "4.17.25",
    "@types/jest": "29.5.14",
    "@types/node": "22.20.5",
    "jest": "29.7.0",
    "ts-jest": "29.2.5",
    "typescript": "5.7.3"
  },
  "jest": {
    "preset": "ts-jest",
    "testEnvironment": "node"
  }
}

// === ARCHIVO: tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "node",
    "outDir": "dist",
    "strict": true,
    "strictPropertyInitialization": false,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "forceConsistentCasingInFileNames": true,
    "types": [
      "node",
      "jest"
    ]
  },
  "include": [
    "src"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "_pendiente",
    "tests",
    "test",
    "src/**/*.spec.ts",
    "src/**/*.test.ts"
  ]
}

// === ARCHIVO: src/domain/services/ranking.service.ts ===
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

// === ARCHIVO: src/application/controllers/player.controller.ts ===
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

// === ARCHIVO: src/infrastructure/repositories/player.repository.ts ===
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

// === ARCHIVO: src/domain/models/player.model.ts ===
/**
 * Representa un jugador en el sistema de ranking.
 * Soporta caracteres especiales como ñ y tildes.
 */
export interface Player {
  /** Identificador único del jugador */
  id: string;
  /** Nombre del jugador (soporta UTF-8) */
  name: string;
  /** Puntuación actual del jugador */
  score: number;
}

// === ARCHIVO: src/acceptance/f3.test.ts ===
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

// === ARCHIVO: src/app.module.ts ===
import { Module } from '@nestjs/common';
import { PlayerController } from './application/controllers/player.controller';
import { RankingService } from './domain/services/ranking.service';
import { PlayerRepository } from './infrastructure/repositories/player.repository';

@Module({
  controllers: [PlayerController],
  providers: [RankingService, PlayerRepository],
})
export class AppModule {}

// === ARCHIVO: src/main.ts ===
import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  
  const port = process.env.PORT || 3000;
  await app.listen(port);
  
  console.log(`Aplicación ejecutándose en el puerto ${port}`);
  console.log(`Entorno: ${process.env.NODE_ENV || 'development'}`);
}

bootstrap();

// === ARCHIVO: src/domain/services/ranking.service.spec.ts ===
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

// === ARCHIVO: src/application/controllers/player.controller.spec.ts ===
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

// === ARCHIVO: src/domain/entities/player.entity.ts ===
export class Player {
  id: number;
  name: string;
  score: number;

  constructor(id: number, name: string, score: number) {
    this.id = id;
    this.name = name;
    this.score = score;
  }

  static fromData(id: number, name: string, score: number): Player {
    return new Player(id, name, score);
  }

  hasMinimumScore(minimumScore: number): boolean {
    return this.score >= minimumScore;
  }

  compareScore(other: Player): number {
    return other.score - this.score;
  }

  getDisplayName(): string {
    return this.name.trim();
  }

  isValid(): boolean {
    return (
      this.id !== undefined &&
      this.id !== null &&
      this.name !== undefined &&
      this.name !== null &&
      this.name.length > 0 &&
      this.score !== undefined &&
      this.score !== null
    );
  }

  toResponse(): { id: number; name: string; score: number } {
    return {
      id: this.id,
      name: this.getDisplayName(),
      score: this.score,
    };
  }
}
```
