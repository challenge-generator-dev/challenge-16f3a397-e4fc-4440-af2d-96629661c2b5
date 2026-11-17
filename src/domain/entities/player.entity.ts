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