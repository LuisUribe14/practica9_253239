export abstract class ErrorDominio extends Error {
  constructor(
    message: string,
    public readonly tipo: 'no-encontrado' | 'conflicto',
  ) {
    super(message);
  }
}

export class HorarioNoEncontradoError extends ErrorDominio {
  constructor(horarioId: number) {
    super(`No existe el horario ${horarioId}`, 'no-encontrado');
  }
}

export class MiembroNoEncontradoError extends ErrorDominio {
  constructor(miembroId: number) {
    super(`No existe el miembro ${miembroId}`, 'no-encontrado');
  }
}

export class CupoLlenoError extends ErrorDominio {
  constructor(horarioId: number, cupoMaximo: number) {
    super(`El horario ${horarioId} ya tiene ${cupoMaximo} inscripciones confirmadas`, 'conflicto');
  }
}

export class InscripcionDuplicadaError extends ErrorDominio {
  constructor(horarioId: number, miembroId: number) {
    super(`El miembro ${miembroId} ya esta inscrito en el horario ${horarioId}`, 'conflicto');
  }
}