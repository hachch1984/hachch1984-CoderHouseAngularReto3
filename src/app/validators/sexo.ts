import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Sexo } from "../interfaces/cliente";

 export function validator_sexo(control: AbstractControl): ValidationErrors | null {
  const valor = control.value as Sexo;
  if (valor === Sexo.Masculino || valor === Sexo.Femenino) {
    return null;
  }
  return { sexo: true, message: 'El campo debe ser un sexo válido' };
}