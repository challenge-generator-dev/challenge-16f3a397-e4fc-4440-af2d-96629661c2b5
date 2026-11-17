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