# AGENTS.md

Instrucciones para el agente de IA que abra este repositorio (Claude Code, Cursor, Codex, Copilot, Gemini). Se cargan solas: no hay que pegar nada en ningun chat.

## Que es este repositorio

Es el codigo base de un reto de aprendizaje de Pragma: **Implementación de API de Ranking de Jugadores**.

| | |
|---|---|
| Tema | Ranking de jugadores con puntaje ≥ 100 → top 10 |
| Nivel | advanced-l2 |
| Chapter | Backend |
| Especialidad | Node |
| Stack | TypeScript / NestJS 10 |
| Patron arquitectonico | capas estándar (dominio, aplicación, infraestructura) |
| Tiempo estimado | 8 horas |

## Receta del stack

Esqueleto obligatorio:

- `package.json y tsconfig.json en la raiz`
- `src/main.ts como bootstrap`
- `modulo raiz de Nest`
- `src/domain con entidades y puertos`
- `src/application con casos de uso`
- `src/infrastructure con repositorios y controller`

Trampas conocidas:

- No inventes versiones de npm. Usa rango con caret (`^5.7.2`) sobre una version que exista, o deja que el paquete la resuelva. Una version inexistente (ej. `@types/react-router-dom@6.19.0`) hace fallar `npm install` con ETARGET y el proyecto no instala.
- Los paquetes `@types/*` solo hacen falta para librerias que no traen sus propios tipos. React Router, NestJS y Prisma ya los traen: agregar `@types/` de esos rompe o sobra.
- El `tsconfig.json` es obligatorio: sin el, `tsc` no sabe que compilar.

Dependencias:

- @nestjs/common 10.4.22
- @nestjs/core 10.4.22
- @nestjs/platform-express 10.4.22
- class-transformer 0.5.1
- class-validator 0.15.1
- express 5.3.0
- reflect-metadata 0.2.2
- rxjs 7.8.2
- @nestjs/testing 10.4.22
- @types/express 4.17.25
- @types/jest 29.5.14
- @types/node 22.20.5
- jest 29.7.0
- ts-jest 29.2.5
- typescript 5.7.3

## Tu tarea

Dejar este proyecto en estado **verificable**: que el comando de verificacion corra sin errores. Escribi los archivos en disco, en este repositorio. No generes ZIPs ni archivos adjuntos.

En orden:

1. Corre `npm install --no-audit --no-fund && npm run build` y mira que falla.
2. Completa lo que falte de la lista de abajo: manifiesto de dependencias, punto de entrada, capa de interfaz y las capas del patron declarado.
3. Arregla SOLO los errores que impiden compilar o arrancar.
4. Volve a correr `npm install --no-audit --no-fund && npm run build` hasta que pase.
5. Pará ahí.

## Regla dura: las fases son trabajo del humano

**PROHIBIDO implementar los entregables de las fases.** El valor del reto esta en que la persona los resuelva. Tu trabajo es que tenga un proyecto que arranca; el hueco pedagogico se queda como esta.

No resuelvas nada de esto:

- **Fase 1 — Definición del Modelo de Datos**: Modelo de datos definido y documentado en un archivo de TypeScript con interfaces y tipos.
- **Fase 2 — Implementación de la Lógica de Negocio**: Lógica de negocio implementada y documentada.
- **Fase 3 — Desarrollo de la API**: API implementada y documentada.

Distincion operativa:

- **Arreglar** (si): import faltante, tipo que no existe, dependencia sin declarar, error de sintaxis, archivo referenciado que no existe.
- **No tocar** (no): logica de negocio incompleta, validaciones ausentes, secretos hardcodeados, APIs deprecadas que funcionan, concurrencia insegura, patrones mejorables. Eso es lo que la persona tiene que encontrar.

## Superficie de practica (NO completes)

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs. No toques la logica que el reto pide completar.

- [ ] `src/domain/services/ranking.service.ts` — La pieza p2 (Lógica de negocio para cálculo de rankings, fase f2) vive aqui: este archivo es su unico dueno (blueprint v2).
- [ ] `src/application/controllers/player.controller.ts` — La pieza p3 (Implementación de endpoints API, fase f3) vive aqui: este archivo es su unico dueno (blueprint v2).
- [ ] `src/infrastructure/repositories/player.repository.ts` — La pieza p4 (Acceso a datos simulado, fase f3) vive aqui: este archivo es su unico dueno (blueprint v2).

## Mapa de fases

La **Fase 0** es clonar el repositorio, instalar dependencias y correr las pruebas de aceptacion: todas fallan porque la logica de cada pieza esta pendiente.

| Fase | Pieza (skill) | Archivo:simbolo | Criterios | Prueba | Comando |
|------|---------------|-----------------|-----------|--------|---------|
| f1 — Definición del Modelo de Datos | Definición de modelos de datos | — | El modelo de datos está definido con los campos requeridos.; El modelo está documentado con comentarios claros. | — | — |
| f2 — Implementación de la Lógica de Negocio | Lógica de negocio para cálculo de rankings | `src/domain/services/ranking.service.ts:RankingService.getTopPlayers` | La lógica de negocio calcula el top 10 de jugadores con puntaje ≥ 100.; La lógica maneja casos borde como ausencia de jugadores con puntaje suficiente. | — | — |
| f3 — Desarrollo de la API | Implementación de endpoints API | `src/application/controllers/player.controller.ts:PlayerController.getRanking` | La API expone un endpoint que devuelve el top 10 de jugadores con puntaje ≥ 100.; El endpoint maneja caracteres especiales como 'ñ' y tildes.; El endpoint devuelve los datos en orden descendente. | `src/acceptance/f3.test.ts` | `npx jest --preset ts-jest --runInBand --forceExit src/acceptance/f3.test.ts` |
| f3 — Desarrollo de la API | Acceso a datos simulado | `src/infrastructure/repositories/player.repository.ts:PlayerRepository.findAll` | La API expone un endpoint que devuelve el top 10 de jugadores con puntaje ≥ 100.; El endpoint maneja caracteres especiales como 'ñ' y tildes.; El endpoint devuelve los datos en orden descendente. | `src/acceptance/f3.test.ts` | `npx jest --preset ts-jest --runInBand --forceExit src/acceptance/f3.test.ts` |

## Pruebas de aceptacion y ubicacion de la logica

Las pruebas de aceptacion (columna "Prueba" de la tabla) son de **solo lectura**: definen que significa "listo". No las edites, no las borres y no les agregues `skip`; lo que se resuelve es el codigo de cada pieza.

La logica de cada pieza va en su archivo; no la muevas a otro.

## Restricciones del pedido

| Restriccion | Donde se cumple | Estado |
|-------------|-----------------|--------|
| El ranking debe manejar correctamente caracteres especiales como 'ñ' y tildes en los nombres de los jugadores. | `src/acceptance/f3.test.ts` > should return players with special characters sorted correctly | Verificada |
| El endpoint debe devolver el top 10 de jugadores con puntaje ≥ 100, ordenado de forma descendente. | `src/acceptance/f3.test.ts` > should return top 10 players with score >= 100 in descending order | Verificada |
| Debe manejarse el caso en que no haya jugadores con puntaje ≥ 100. | `src/acceptance/f2.test.ts` > should return empty array when no players have score >= 100 | Restriccion no verificada en `src/acceptance/f2.test.ts` > should return empty array when no players have score >= 100 |

## Lo que falta y tenes que completar

### 1. Archivos que la arquitectura declara (2 de 11)

La propuesta arquitectonica del reto los lista y no llegaron al repo. Crealos con implementacion real, respetando la capa en la que viven:

- [ ] `src/acceptance/f1.test.ts`
- [ ] `src/acceptance/f2.test.ts`

### Presentes (12)

- `package.json`
- `tsconfig.json`
- `src/domain/services/ranking.service.ts`
- `src/application/controllers/player.controller.ts`
- `src/infrastructure/repositories/player.repository.ts`
- `src/domain/models/player.model.ts`
- `src/acceptance/f3.test.ts`
- `src/app.module.ts`
- `src/main.ts`
- `src/domain/services/ranking.service.spec.ts`
- `src/application/controllers/player.controller.spec.ts`
- `src/domain/entities/player.entity.ts`

### Capas del patron declarado

Son las capas que la propuesta arquitectonica plantea, marcadas segun existan hoy en el repo. Orientan donde poner el codigo nuevo; no son una condicion para compilar.

- `domain/models` (ausente)
- `domain/services` (ausente)
- `application/controllers` (ausente)
- `infrastructure/repositories` (ausente)

## Verificacion

```bash
npm install --no-audit --no-fund && npm run build
```

El comando tiene que pasar SIN implementar los archivos de la superficie de practica: solo andamiaje.

Ese comando pasando es la definicion de "terminado" para vos.

## Convenciones que tenes que respetar

- Un solo ecosistema: no declares librerias de otro lenguaje ni mezcles gestores de paquetes.
- Toda libreria que uses tiene que estar declarada en el manifiesto de dependencias.
- Todo import declarado tiene que usarse; todo tipo usado tiene que existir o venir de una dependencia declarada.
- El patron es **capas estándar (dominio, aplicación, infraestructura)**: los contratos (interfaces, puertos) los define la capa interna y los implementa la externa, nunca al revés.
- Los archivos que crees llevan implementacion real, no stubs: sin `TODO`, sin cuerpos vacios, sin `// getters y setters`.

## Contexto del candidato

Sirve para calibrar el nivel del codigo, no para resolver las fases.

- Perfil: Chapter Backend, Especialidad Desarrollador, Tecnología Node, Advanced L2
- Brecha que el reto ataca: API que calcula un ranking 🏆 de jugadores con puntaje ≥ 100 y devuelve el top 10 → ordenado “descendente”; con ñ y tildes

---

*Generado por Challenge Generator — Pragma. `README.md` tiene el enunciado completo del reto para la persona. `PROMPT_MEJORA.md` es la variante para pegar en un chat, si se prefiere ese flujo.*
