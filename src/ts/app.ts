import { Clinica } from "./clinica";
import { Paciente } from "./paciente";

const clinica = new Clinica();

const pacienteForm = document.getElementById("pacienteForm") as HTMLFormElement;
const pacientesTabla = document.getElementById("pacientesTabla") as HTMLElement;
const buscarPacienteInput = document.getElementById("buscarPaciente") as HTMLInputElement;

pacienteForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = (document.getElementById("nombre") as HTMLInputElement).value;
  const apellido = (document.getElementById("apellido") as HTMLInputElement).value;
  const edad = parseInt((document.getElementById("edad") as HTMLInputElement).value);
  const genero = (document.getElementById("genero") as HTMLSelectElement).value;
  const diagnostico = (document.getElementById("diagnostico") as HTMLInputElement).value;

  const nuevoPaciente = new Paciente(nombre, apellido, edad, genero, diagnostico, new Date());
  clinica.agregarPaciente(nuevoPaciente);

  actualizarTablaPacientes(clinica.listarPacientes());
  pacienteForm.reset();
});

function actualizarTablaPacientes(pacientes: Paciente[]): void {
  pacientesTabla.innerHTML = "";

  pacientes.forEach((paciente) => {
    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${paciente.nombre}</td>
      <td>${paciente.apellido}</td>
      <td>${paciente.edad}</td>
      <td>${paciente.genero}</td>
      <td>${paciente.diagnostico}</td>
      <td>${paciente.fechaRegistro.toLocaleDateString()}</td>
    `;

    pacientesTabla.appendChild(fila);
  });
}

buscarPacienteInput.addEventListener("input", () => {
  const termino = buscarPacienteInput.value;
  const resultados = clinica.buscarPacientes(termino);
  actualizarTablaPacientes(resultados);
});
