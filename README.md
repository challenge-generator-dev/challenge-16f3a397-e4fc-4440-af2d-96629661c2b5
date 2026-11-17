# Implementación de API de Ranking de Jugadores

El sistema debe calcular y devolver un ranking de jugadores con un puntaje igual o superior a 100, mostrando los top 10 jugadores. El ranking debe estar ordenado de manera descendente, considerando la correcta visualización de caracteres especiales como ñ y tildes.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Ranking de jugadores con puntaje ≥ 100 → top 10 |
| **Nivel** | advanced-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 8 horas |

## Stack

- **Lenguaje:** TypeScript
- **Framework:** NestJS 10
- **Version:** Node 22

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Tener el proyecto base del reto funcionando en tu máquina: clonar el repositorio, instalar las herramientas y verificar que compila y arranca antes de empezar a practicar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Instala las herramientas para ejecutar el proyecto: Node.js 18+ y npm.
- Clona el repositorio del reto (el enlace viene en la entrega del reto y en la sección "Repositorio del Proyecto" del PDF) y ábrelo en tu IDE.
- Instala las dependencias y compila ejecutando `npm install --no-audit --no-fund && npm run build` en la raíz del repositorio.
- Confirma que el comando termina sin errores: el proyecto arranca y sus pruebas corren.
- Ubica los archivos de práctica: son los que contienen `TODO(reto)` (búscalos en el repositorio). Lee el README.md y el AGENTS.md antes de empezar.

**Entregable:** El proyecto compila/arranca sin errores con `npm install --no-audit --no-fund && npm run build`.

<details>
<summary>Pistas de conocimiento</summary>

- Los archivos con `TODO(reto)` son el ejercicio: el resto del repositorio ya está resuelto y no hace falta tocarlo.
- Si el comando de verificación falla, revisa la versión de las herramientas instaladas antes de modificar código.
- AGENTS.md describe el reto, el comando de verificación y las reglas del repositorio.

</details>

### Fase 1: Definición del Modelo de Datos

**Objetivo:** Establecer la estructura de datos necesaria para almacenar y recuperar la información de los jugadores.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Crear un archivo `models/player.model.ts` en el componente `app`.
- Definir la interfaz `Player` con los campos `id`, `name`, y `score`.
- Documentar el modelo con comentarios JSDoc.

**Entregable:** Modelo de datos definido y documentado en un archivo de TypeScript con interfaces y tipos.

<details>
<summary>Pistas de conocimiento</summary>

- Considera la necesidad de almacenar información adicional que pueda ser relevante para el ranking.
- Piensa en cómo garantizar la correcta visualización de caracteres especiales en el ranking.

</details>

### Fase 2: Implementación de la Lógica de Negocio

**Objetivo:** Desarrollar la lógica necesaria para calcular el ranking de jugadores.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Implementar la funcionalidad que calcule el ranking de jugadores con un puntaje igual o superior a 100.
- Asegurar que el ranking esté ordenado de manera descendente.

**Entregable:** Lógica de negocio implementada y documentada.

<details>
<summary>Pistas de conocimiento</summary>

- Considera la eficiencia del algoritmo de ordenamiento utilizado.
- Piensa en cómo manejar posibles empates en el ranking.

</details>

### Fase 3: Desarrollo de la API

**Objetivo:** Crear la API que expose el ranking de jugadores.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Desarrollar la API que devuelva el top 10 del ranking de jugadores.
- Asegurar que la API maneje correctamente los caracteres especiales.

**Entregable:** API implementada y documentada.

<details>
<summary>Pistas de conocimiento</summary>

- Considera la seguridad y el rendimiento de la API.
- Piensa en cómo documentar la API para que sea fácilmente comprensible por otros desarrolladores.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es un ranking de jugadores y por qué es importante en este contexto?
- **paraQueSirve**: ¿Para qué sirve la API de ranking de jugadores en el sistema?
- **comoSeUsa**: ¿Cómo se utiliza la lógica de negocio para calcular el ranking de jugadores?
- **erroresComunes**: ¿Qué errores comunes pueden ocurrir al implementar la lógica de negocio y cómo se pueden evitar?
- **queDecisionesImplica**: ¿Qué decisiones importantes se deben tomar al desarrollar la API y por qué?

## Criterios de Evaluacion

- Definición correcta y completa del modelo de datos para los jugadores.
- Implementación eficiente y correcta de la lógica de negocio para calcular el ranking.
- Desarrollo de una API funcional que devuelva el top 10 del ranking de jugadores, manejando correctamente los caracteres especiales.
- Documentación clara y completa de la API y la lógica de negocio.

## Mapa de fases

La **Fase 0** es clonar el repositorio, instalar dependencias y correr las pruebas de aceptacion: todas fallan porque la logica de cada pieza esta pendiente.

| Fase | Pieza (skill) | Archivo:simbolo | Criterios | Prueba | Comando |
|------|---------------|-----------------|-----------|--------|---------|
| f1 — Definición del Modelo de Datos | Definición de modelos de datos | — | El modelo de datos está definido con los campos requeridos.; El modelo está documentado con comentarios claros. | — | — |
| f2 — Implementación de la Lógica de Negocio | Lógica de negocio para cálculo de rankings | `src/domain/services/ranking.service.ts:RankingService.getTopPlayers` | La lógica de negocio calcula el top 10 de jugadores con puntaje ≥ 100.; La lógica maneja casos borde como ausencia de jugadores con puntaje suficiente. | — | — |
| f3 — Desarrollo de la API | Implementación de endpoints API | `src/application/controllers/player.controller.ts:PlayerController.getRanking` | La API expone un endpoint que devuelve el top 10 de jugadores con puntaje ≥ 100.; El endpoint maneja caracteres especiales como 'ñ' y tildes.; El endpoint devuelve los datos en orden descendente. | `src/acceptance/f3.test.ts` | `npx jest --preset ts-jest --runInBand --forceExit src/acceptance/f3.test.ts` |
| f3 — Desarrollo de la API | Acceso a datos simulado | `src/infrastructure/repositories/player.repository.ts:PlayerRepository.findAll` | La API expone un endpoint que devuelve el top 10 de jugadores con puntaje ≥ 100.; El endpoint maneja caracteres especiales como 'ñ' y tildes.; El endpoint devuelve los datos en orden descendente. | `src/acceptance/f3.test.ts` | `npx jest --preset ts-jest --runInBand --forceExit src/acceptance/f3.test.ts` |

## Pruebas de aceptacion

Las pruebas de aceptacion (columna "Prueba" de la tabla) son de **solo lectura**: definen que significa "listo". No las edites, no las borres y no les agregues `skip`; lo que se resuelve es el codigo de cada pieza.

## Restricciones del pedido

| Restriccion | Donde se cumple | Estado |
|-------------|-----------------|--------|
| El ranking debe manejar correctamente caracteres especiales como 'ñ' y tildes en los nombres de los jugadores. | `src/acceptance/f3.test.ts` > should return players with special characters sorted correctly | Verificada |
| El endpoint debe devolver el top 10 de jugadores con puntaje ≥ 100, ordenado de forma descendente. | `src/acceptance/f3.test.ts` > should return top 10 players with score >= 100 in descending order | Verificada |
| Debe manejarse el caso en que no haya jugadores con puntaje ≥ 100. | `src/acceptance/f2.test.ts` > should return empty array when no players have score >= 100 | Restriccion no verificada en `src/acceptance/f2.test.ts` > should return empty array when no players have score >= 100 |

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
npm install --no-audit --no-fund && npm run build
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
