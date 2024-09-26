export class Paciente {
    constructor(
      public nombre: string,
      public apellido: string,
      public edad: number,
      public genero: string,
      public diagnostico: string,
      public fechaRegistro: Date
    ) {}
  }
  