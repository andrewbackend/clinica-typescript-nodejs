import { Paciente } from "./paciente";

export class Clinica {
  private pacientes: Paciente[] = [];

  agregarPaciente(paciente: Paciente): void {
    this.pacientes.push(paciente);
  }

  listarPacientes(): Paciente[] {
    return this.pacientes;
  }

  buscarPacientes(termino: string): Paciente[] {
    return this.pacientes.filter(
      (paciente) =>
        paciente.nombre.toLowerCase().includes(termino.toLowerCase()) ||
        paciente.apellido.toLowerCase().includes(termino.toLowerCase())
    );
  }
}
